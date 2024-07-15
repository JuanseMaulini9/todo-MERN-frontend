import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BoardInterface } from "../types/storeInterface";

export interface ResponseBoards {
  userBoards: BoardInterface[];
}

const initialState: ResponseBoards = { userBoards: [] };

export const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    setBoards: (state, action: PayloadAction<ResponseBoards>) => {
      state.userBoards = action.payload.userBoards;
    },
    addBoard: (state, action: PayloadAction<BoardInterface>) => {
      state.userBoards.push(action.payload);
    },
  },
});

export const { setBoards, addBoard } = boardSlice.actions;
