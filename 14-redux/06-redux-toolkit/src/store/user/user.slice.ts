import { createSlice } from "@reduxjs/toolkit";

export type User = {
  name: string;
};

export type UserState = {
  user: User | null;
  isAuthenticated: boolean;
};

type Action = {
  type: string;
};

type LoginAction = Action & {
  payload: { user: User };
};

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: LoginAction) {
      const { user } = action.payload;
      state.user = user;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
