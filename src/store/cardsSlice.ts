import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskCardInterface, PayloadInterface } from "../types/storeInterface";
import { fakeTasks } from "../fakeTasks";

const initialState: TaskCardInterface[] = fakeTasks;

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    moveTask: (state, action: PayloadAction<PayloadInterface>) => {
      const { id, newStateValue } = action.payload;
      const taskCardIndex = state.findIndex((task) => task.id === id);
      if (taskCardIndex !== -1) {
        state[taskCardIndex] = {
          ...state[taskCardIndex],
          stateValue: newStateValue,
        };
      }
    },
  },
});

export const { moveTask } = cardSlice.actions;
