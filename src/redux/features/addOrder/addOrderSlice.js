import { createSlice } from "@reduxjs/toolkit";

export const addOrderSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
    orders: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addToOrder: (state, actions) => {
      state.orders.push(actions.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, addToOrder } = addOrderSlice.actions;

export default addOrderSlice.reducer;
