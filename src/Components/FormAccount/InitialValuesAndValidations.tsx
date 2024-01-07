import * as yup from "yup";

export const accountInitialValues = {
  name: "",
  email: "",
};

export const accountValidations = yup.object({
  name: yup.string().required("Digite seu nome!"),
  email: yup
    .string()
    .email("Digite um E-mail válido!")
    .required("Email é Obrigatório!"),
});
