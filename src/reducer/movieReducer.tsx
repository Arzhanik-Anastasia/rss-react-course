import { createSlice } from '@reduxjs/toolkit';
import { getMovies } from './../thunks/movie';
import { IMovies } from './../types/interfaces';

type IMoviesState = {
  movies: IMovies;
  search: string;
  isLoading: boolean;
  error: boolean;
};

const initialState: IMoviesState = {
  movies: {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  search: '',
  isLoading: true,
  error: false,
};

const movieReducer = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
      })
      .addCase(getMovies.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export default movieReducer.reducer;
export const { setSearch } = movieReducer.actions;
