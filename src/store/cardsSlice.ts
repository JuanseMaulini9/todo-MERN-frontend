import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskCardInterface, PayloadInterface } from "../types/storeInterface";
import { fakeTasks } from "../fakeTasks";

const initialState: TaskCardInterface[] = fakeTasks;

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    changeState: (state, action: PayloadAction<PayloadInterface>) => {
      const { id, newStateValue } = action.payload;
      const taskCard = state.find((task) => task.id === id);
      if (taskCard) taskCard.stateValue = newStateValue;
    },
  },
});

export const { changeState } = cardSlice.actions;
