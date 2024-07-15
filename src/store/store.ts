import { configureStore } from "@reduxjs/toolkit";
import { cardSlice } from "./cardsSlice";
import { viewModalSlice } from "./modalSlice";
import { boardSlice } from "./boardsSlice";

export const store = configureStore({
  reducer: {
    cards: cardSlice.reducer,
    viewModal: viewModalSlice.reducer,
    boards: boardSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
