import { API } from "./api";
import { toast } from "react-toastify";
export const GamesList = async () => {
  const request = `/cart_games`;
  try {
    let response = await API.get(request);
    if (response.status === 200) {
      return response.data;
    }
    if (response.status === 404) {
      throw new Error("Servidor indisponível");
    }
    throw new Error();
  } catch (error) {
    toast.error(`Erro ${error}`);
    return false;
  }
};
