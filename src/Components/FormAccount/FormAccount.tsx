import { FC, useEffect } from "react";

import { FormAccountStyle } from "./FormAccountStyle";

import { useFormik } from "formik";
import { Title, Input, Button } from "@Components/index";

import {
  accountInitialValues,
  accountValidations,
} from "./InitialValuesAndValidations";
import { useNavigate } from "react-router";
import { getUser } from "@api/getUser";
import { updateUser } from "@api/updateUser";

const FormAccount: FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: accountInitialValues,
    validationSchema: accountValidations,
    onSubmit: async (values) => {
      const response = await updateUser(values);
      if (response) {
        navigate("/");
      }
    },
  });
  const getDataUser = async () => {
    const userData = await getUser();
    formik.setFieldValue("name", userData.name);
    formik.setFieldValue("email", userData.email);
  };
  useEffect(() => {
    getDataUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Title fontsize="35">Update</Title>
      <FormAccountStyle onSubmit={formik.handleSubmit}>
        <Input
          input={{
            type: "text",
            placeholder: "Name",
            ...formik.getFieldProps("name"),
            autoComplete: "on",
          }}
          error={
            formik.errors.name && formik.touched.name
              ? formik.errors.name
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

        <Button typeStyle="large" color="green" type="submit">
          Update
        </Button>
      </FormAccountStyle>
    </>
  );
};
export default FormAccount;
