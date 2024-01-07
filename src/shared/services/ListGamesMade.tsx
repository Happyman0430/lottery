import { API } from "./api";
import { toast } from "react-toastify";
export const ListGamesMade = async (urls?: string[]) => {
  const param = new URLSearchParams();
  const request = `/bet/all-bets`;
  if (urls && urls.length > 0) {
    urls.forEach((url) => param.append("type[]", url));
  }

  try {
    let response = await API.get(request, {
      params: param,
    });

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
