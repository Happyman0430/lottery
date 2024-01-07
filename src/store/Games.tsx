import { createSlice } from "@reduxjs/toolkit";
import { GamesList } from "src/shared/services/Games";

type Game = {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
};
type GameListType = {
  list: {
    min_cart_value: number;
    types: Game[];
  };
  currentGame: Game;
};
const InitialValueGames: GameListType = {
  list: {
    min_cart_value: 0,
    types: [],
  },
  currentGame: {
    id: 0,
    type: "",
    description: "",
    range: 0,
    price: 0,
    max_number: 0,
    color: "",
  },
};

const Games = createSlice({
  name: "ListAndFilterGames",
  initialState: InitialValueGames,
  reducers: {
    GameSave(state, action) {
      state.list = action.payload;
    },
    setCurrentGame(state, action) {
      state.currentGame = action.payload;
    },
  },
});

export const ListGameActions = Games.actions;

export function FetchListGames() {
  return async (dispatch: any) => {
    let response = await GamesList();
    await dispatch(ListGameActions.GameSave(response));
    await dispatch(ListGameActions.setCurrentGame(response.types[0]));
  };
}
export default Games;
