import { configureStore } from "@reduxjs/toolkit";
import { viewModalSlice } from "./modalSlice";
import { boardSlice } from "./boardSlice";
import { currentBoardSlice } from "./currentBoardSlice";
import { boardsNamesSlice } from "./boadsNamesSlice";

export const store = configureStore({
  reducer: {
    viewModal: viewModalSlice.reducer,
    board: boardSlice.reducer,
    currentBoard: currentBoardSlice.reducer,
    boardsNames: boardsNamesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
