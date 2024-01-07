import * as yup from "yup";

export const RegisterInitialValues = {
  user: "",
  email: "",
  password: "",
};

export const RegisterValidations = yup.object({
  user: yup.string().required("Usuário é obrigatório"),
  email: yup
    .string()
    .email("Digite um E-mail válido!")
    .required("Email é Obrigatório!"),
  password: yup.string().required("Digite sua senha!"),
});
