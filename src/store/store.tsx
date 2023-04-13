import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moviesReducer from './../reducer/moviesReducer';
import formReducer from './../reducer/formReducer';
import movieReducer from './../reducer/movieReducer';

export const store = configureStore({
  reducer: {
    moviesCard: moviesReducer,
    movieCard: movieReducer,
    formCard: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
