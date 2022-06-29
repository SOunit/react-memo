import { createSlice } from "@reduxjs/toolkit";

export type Movie = {
  title: string;
};

export type MoviesState = {
  movies: Movie[];
  isLoading: boolean;
  error: Error | null;
};

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action) {
      const { movies } = action.payload;
      state.movies = movies;
      state.error = null;
    },
    setError(state, action) {
      const { error } = action.payload;
      state.error = error;
    },
    setIsLoading(state, action) {
      const { isLoading } = action.payload;
      state.isLoading = isLoading;
    },
  },
});

export const moviesReducer = moviesSlice.reducer;
export const moviesActions = moviesSlice.actions;
