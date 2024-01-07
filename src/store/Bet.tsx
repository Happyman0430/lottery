import { PostGamesMade } from "src/shared/services/PostGamesMade";
import { ListGamesMade } from "src/shared/services/ListGamesMade";
import { createSlice } from "@reduxjs/toolkit";

type GameType = { games: { game_id: number; numbers: number | never[] }[] };
const games: GameType = { games: [] };

const GameSlice = createSlice({
  name: "gameSlice",
  initialState: games,
  reducers: {
    saveGame(state, action) {
      state.games = action.payload;
    },
  },
});

export const GameActions = GameSlice.actions;

export function PostBet(newGame: any) {
  return async (dispatch: any) => {
    const response = await PostGamesMade(newGame);
    await dispatch(GameActions.saveGame(newGame));
    if (response.bet) {
      return true;
    }
    throw new Error("");
  };
}

export function FetchBet(url?: string[]) {
  return async (dispatch: any) => {
    let response = await ListGamesMade(url);
    await dispatch(GameActions.saveGame(response));
  };
}
export default GameSlice;
