import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "./calculateSlice"

const store = configureStore({
  reducer: {
    expressionReducer: calculatorSlice,
  },
});

export default store;