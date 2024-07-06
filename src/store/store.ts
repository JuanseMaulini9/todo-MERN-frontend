import { configureStore } from "@reduxjs/toolkit";
import { cardSlice } from "./cardsSlice";

export const store = configureStore({
  reducer: {
    cards: cardSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
