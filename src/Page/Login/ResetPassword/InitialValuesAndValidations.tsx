import * as yup from "yup";

export const ResetInitialValues = {
  email: "",
};

export const ResetValidations = yup.object({
  email: yup
    .string()
    .email("Digite um E-mail válido!")
    .required("Email é Obrigatório!"),
});
