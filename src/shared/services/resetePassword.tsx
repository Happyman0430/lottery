import { toast } from "react-toastify";
import { API } from "./api";

export const resetPassword = async (email: string) => {
  const request = `reset`;
  const data = JSON.stringify({ email });
  try {
    let response = await API.post(request, data);
    if (response.status === 200) {
      toast.success("Senha resetada com sucesso!");
      return true;
    }
    if (response.status === 404) {
      throw new Error("Usuário não econtrado!");
    }

    throw new Error();
  } catch (error) {
    toast.error(`${error}`);
    return false;
  }
};
