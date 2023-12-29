import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteMovies: [],
  favoriteTv: [],
};

const favSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addFavMovie: (state, { payload }) => {
      console.log(payload);
      const checked = state.favoriteMovies.find(
        (movie) => movie.id === payload.id
      );
      if (checked) return state;
      state.favoriteMovies = [...state.favoriteMovies, payload];
    },
    addFavTv: (state, { payload }) => {
      const checked = state.favoriteTv.find((movie) => movie.id === payload.id);
      if (checked) return state;
      state.favoriteTv = [...state.favoriteTv, payload];
    },
    removeFavMovie: (state, { payload }) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.id !== payload
      );
    },
    removeFavTv: (state, { payload }) => {
      state.favoriteTv = state.favoriteTv.filter(
        (movie) => movie.id !== payload
      );
    },
    ClearFavMovie: (state, { payload }) => {
      state.favoriteMovies = [];
    },
    ClearFavTv: (state, { payload }) => {
      state.favoriteTv = [];
    },
  },
});

export const {
  ClearFavMovie,
  ClearFavTv,
  removeFavTv,
  removeFavMovie,
  addFavTv,
  addFavMovie,
} = favSlice.actions;

export default favSlice.reducer;
