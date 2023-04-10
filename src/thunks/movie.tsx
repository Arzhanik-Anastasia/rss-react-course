import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY_3, API_URL } from './../utils/constants';

export const getMovies = createAsyncThunk('movies/get', async (search: string) => {
  try {
    const response =
      search === ''
        ? await fetch(
            `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=popularity.desc&page=1`
          )
        : await fetch(
            `${API_URL}/search/movie?api_key=${API_KEY_3}&query=${search}&sort_by=popularity.desc&page=1`
          );
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error((err as Error).message);
  }
});
