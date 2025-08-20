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
      state.desserts.push({ ...payload, amount: 1 });
      dessertSlice.caseReducers.calculateTotal(state);
    },
    removeDessert: (state, { payload }) => {
      state.desserts = state.desserts.filter((item) => item.id !== payload);
      dessertSlice.caseReducers.calculateTotal(state);
    },
    incrementAmount: (state, { payload }) => {
      const item = state.desserts.find((item) => item.id == payload);
      item.amount += 1;
      dessertSlice.caseReducers.calculateTotal(state);
    },
    decrementAmount: (state, { payload }) => {
      const item = state.desserts.find((item) => item.id === payload);
      item.amount -= 1;
      dessertSlice.caseReducers.calculateTotal(state);
    },
    clearDessert:(state)=>{
      state.desserts=[]
      dessertSlice.caseReducers.calculateTotal(state);
    },
    calculateTotal: (state) => {
      let price = 0;
      let amount = 0;

      state.desserts.forEach((item) => {
        price += item.amount * item.price;
        amount += item.amount;
      });
      state.totalAmount = amount;
      state.totalPrice = price;
    },
  },
});

export const {
  addDessert,
  removeDessert,
  clearAmount,
  clearDessert,
  incrementAmount,
  decrementAmount,
} = dessertSlice.actions;
export default dessertSlice.reducer;
