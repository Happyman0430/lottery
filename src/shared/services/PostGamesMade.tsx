import { toast } from "react-toastify";
import { API } from "./api";

type postGameType = {
  games: {
    game_id: number;
    numbers: number[];
  }[];
};
export const PostGamesMade = async (values: postGameType) => {
  const request = `/bet/new-bet`;
  try {
    let response = await API.post(request, values, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      toast.success("Itens salvo com sucesso!!!");
      return response.data;
    }
    if (response.status === 404) {
      throw new Error("Servidor indisponível");
    }

    throw new Error();
  } catch (error) {
    toast.error(`${error}`);
    return;
  }
};
