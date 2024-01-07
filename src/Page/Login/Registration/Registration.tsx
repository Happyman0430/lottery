import { FC } from "react";

import { Title, Input, Button } from "@Components/index";

import { Form } from "../StyledContainerLogin";

import { useNavigate } from "react-router-dom";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { useFormik } from "formik";
import {
  RegisterInitialValues,
  RegisterValidations,
} from "./InitialValuesAndValidations";

import { createUser } from "src/shared/services/createUser";

const Registration: FC = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: RegisterInitialValues,
    validationSchema: RegisterValidations,
    onSubmit: async (values, formikBag) => {
      const { user, email, password } = values;
      const response = await createUser(user, email, password);
      if (response) {
        navigate("/");
      }
    },
  });

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Title fontsize="35">Registration</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          input={{
            type: "text",
            placeholder: "Name",
            ...formik.getFieldProps("user"),
            autoComplete: "on",
          }}
          error={
            formik.errors.user && formik.touched.user
              ? formik.errors.user
              : null
          }
        />
        <Input
          input={{
            type: "text",
            placeholder: "Email",
            ...formik.getFieldProps("email"),
            autoComplete: "on",
          }}
          error={
            formik.errors.email && formik.touched.email
              ? formik.errors.email
              : null
          }
        />
        <Input
          input={{
            type: "password",
            placeholder: "Password",
            ...formik.getFieldProps("password"),
            autoComplete: "on",
          }}
          error={
            formik.errors.password && formik.touched.password
              ? formik.errors.password
              : null
          }
        />

        <Button typeStyle="large" type="submit" color="green">
          Register
          <AiOutlineArrowRight />
        </Button>
      </Form>
      <Button typeStyle="large" onClick={handleClick}>
        <AiOutlineArrowLeft />
        Back
      </Button>
    </>
  );
};
export default Registration;
