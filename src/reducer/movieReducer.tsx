import { createSlice } from '@reduxjs/toolkit';
import { getMovie } from '../thunks/movie';
import { IMovie } from '../types/interfaces';

type IMovieState = {
  movieInfo: IMovie;
  isLoading: boolean;
  error: boolean;
};

const initialState: IMovieState = {
  movieInfo: {
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  isLoading: true,
  error: false,
};

const movieReducer = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.movieInfo = action.payload;
        state.isLoading = false;
      })
      .addCase(getMovie.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export default movieReducer.reducer;
