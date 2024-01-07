import { FC } from "react";

import { Input, Title, Button } from "@Components/index";

import { useNavigate } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Form } from "../StyledContainerLogin";

import { useFormik } from "formik";

import {
  LoginInitialValues,
  LoginValidations,
} from "./InitialValuesAndValidations";

import { loginUser } from "src/shared/services/loginLogout";

const Login: FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: LoginInitialValues,
    validationSchema: LoginValidations,
    onSubmit: async (values, formikBag) => {
      const response = await loginUser(values.email, values.password);
      if (response) {
        formikBag.setFieldValue("email", "", false);
        formikBag.setFieldValue("password", "", false);
        navigate("/home");
      }
    },
  });
  const handleRegister = () => {
    navigate("/registration");
  };

  return (
    <>
      <Title fontsize="35">Authentication</Title>
      <Form onSubmit={formik.handleSubmit}>
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
        <Link to="/resetPassword">I forgot my password</Link>

        <Button typeStyle="large" color="green" type="submit">
          Log In
          <AiOutlineArrowRight />
        </Button>
      </Form>
      <Button typeStyle="large" onClick={handleRegister}>
        Sign Up <AiOutlineArrowRight />
      </Button>
    </>
  );
};
export default Login;
