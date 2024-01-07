import { API } from "./api";
import { createSession } from "../helpers/localStorage";
import { toast } from "react-toastify";

export const loginUser = async (email: string, password: string) => {
  const request = `login`;
  const data = JSON.stringify({ email, password });
  try {
    let response = await API.post(request, data);
    if (response.status === 200) {
      createSession(response.data.token);
      return true;
    }
    if (response.status === 401) {
      throw new Error("Senha ou Email inválido! ");
    }
    if (response.status === 404) {
      throw new Error(
        "Não foi possivel realizar login, servidor indisponível."
      );
    }
    throw new Error();
  } catch (error) {
    toast.error(`${error}`);
    return false;
  }
};
