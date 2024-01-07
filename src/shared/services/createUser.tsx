import { API } from "./api";
import { toast } from "react-toastify";
export const createUser = async (
  user: string,
  email: string,
  password: string
) => {
  const request = `/user/create`;
  const data = JSON.stringify({ name: user, email, password });

  try {
    let response = await API.post(request, data);
    console.log(response);
    if (response.status === 200) {
      toast.success("Usuário cadastrado com sucesso!");
      return true;
    }
    if (response.status === 404) {
      throw new Error("Servidor indisponível");
    }
    if (response.data.error.message === "Email already exists") {
      throw new Error("Esse e-mail já está cadastrado!");
    }
    throw new Error(response.data.error.message);
  } catch (error) {
    toast.error(`${error}`);
    return false;
  }
};
