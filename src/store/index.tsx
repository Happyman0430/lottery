import { configureStore } from "@reduxjs/toolkit";
import Bet from "./Bet";
import ListAndFilterGames from "./Games";

const store = configureStore({
  reducer: { games: Bet.reducer, ListGames: ListAndFilterGames.reducer },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
