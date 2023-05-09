import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  name: "exampleDashboard",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = exampleSlice.actions;
export const selectCount = (state) => state.exampleDashboard.value;

export default exampleSlice.reducer;
