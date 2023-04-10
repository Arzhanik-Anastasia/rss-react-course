import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import movieReducer from './../reducer/movieReducer';

export const store = configureStore({
  reducer: {
    /*  formCard: formCardReducer,*/
    movieCard: movieReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
