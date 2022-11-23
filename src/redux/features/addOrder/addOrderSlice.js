import { createSlice } from "@reduxjs/toolkit";

export const addOrderSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = addOrderSlice.actions;

export default addOrderSlice.reducer;
