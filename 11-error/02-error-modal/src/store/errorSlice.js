import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorMessage: null,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const errorActions = errorSlice.actions;
export const errorReducer = errorSlice.reducer;
