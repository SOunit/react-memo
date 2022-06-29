import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/counter.slice";
import { moviesReducer } from "./movies/movies.slice";
import { userReducer } from "./user/user.slice";

// for single reducer
// const store = configureStore({ reducer: counterSlice.reducer });

// for multiple reducers
const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
