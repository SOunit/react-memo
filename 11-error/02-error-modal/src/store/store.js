import { configureStore } from "@reduxjs/toolkit";
import { errorReducer } from "./errorSlice";

export const store = configureStore({
  reducer: {
    error: errorReducer,
  },
});
