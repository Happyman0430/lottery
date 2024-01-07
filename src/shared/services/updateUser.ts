import { API } from "./api";
import { toast } from "react-toastify";

type userType = {
  name: string;
  email: string;
};
export const updateUser = async (user: userType) => {
  const request = `/user/update`;
  try {
    let response = await API.put(request, user);
    if (response.status === 200) {
      toast.success("Usuário atualizado com sucesso!");
      return true;
    }
    if (response.status === 404) {
      throw new Error("Servidor indisponível");
    }
    throw new Error(response.data.error.message);
  } catch (error) {
    toast.error(`${error}`);
    return false;
  }
};
