import * as yup from "yup";

export const LoginInitialValues = {
  email: "",
  password: "",
};

export const LoginValidations = yup.object({
  email: yup
    .string()
    .email("Digite um E-mail válido!")
    .required("Email é Obrigatório!"),
  password: yup.string().required("Digite sua senha!"),
});
