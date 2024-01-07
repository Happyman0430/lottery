import { FC } from "react";

import { Input, Title, Button } from "@Components/index";

import { Form } from "../StyledContainerLogin";

import { resetPassword } from "src/shared/services/resetePassword";

import { useFormik } from "formik";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import {
  ResetInitialValues,
  ResetValidations,
} from "./InitialValuesAndValidations";

const ResetPassword: FC = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: ResetInitialValues,
    validationSchema: ResetValidations,
    onSubmit: async (values, formikBag) => {
      const response = await resetPassword(values.email);
      if (response) {
        formikBag.setFieldValue("email", "", false);
      }
    },
  });
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Title fontsize="35">Reset password</Title>
      <Form height="190" onSubmit={formik.handleSubmit}>
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

        <Button typeStyle="large" color="green" type="submit">
          Send link
          <AiOutlineArrowRight />
        </Button>
      </Form>
      <Button typeStyle="large" onClick={handleClick}>
        <AiOutlineArrowLeft /> Back
      </Button>
    </>
  );
};
export default ResetPassword;
