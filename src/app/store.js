import { configureStore } from "@reduxjs/toolkit";
import dessertReducer from "./features/dessertSlice";

export const store = configureStore({
  reducer: {
    desserts: dessertReducer,
  },
});
