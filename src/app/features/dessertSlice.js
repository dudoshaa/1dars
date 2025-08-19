import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  desserts: [],
  totalPrice: 0,
  totalAmount: 0,
};

const dessertSlice = createSlice({
  name: "dessert",
  initialState,
  reducers: {
    addDessert: (state, { payload }) => {
      dessertSlice.caseReducers.calculateTotal();
    },
    removeDessert: (state, { payload }) => {
      dessertSlice.caseReducers.calculateTotal();
    },
    clearDessert: (state, { payload }) => {
      dessertSlice.caseReducers.calculateTotal();
    },
    calculateTotal: (state) => {
    },
  },
});

export const { addDessert, removeDessert, clearDessert } = dessertSlice.actions;
export default  dessertSlice.reducer
