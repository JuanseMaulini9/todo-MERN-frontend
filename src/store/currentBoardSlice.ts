import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CurrentBoardState {
  currentBoardId: string | null;
}

const initialState: CurrentBoardState = {
  currentBoardId: null,
};

export const currentBoardSlice = createSlice({
  name: "currentBoard",
  initialState,
  reducers: {
    setCurrentBoard: (state, action: PayloadAction<string>) => {
      state.currentBoardId = action.payload;
    },
  },
});

export const { setCurrentBoard } = currentBoardSlice.actions;
