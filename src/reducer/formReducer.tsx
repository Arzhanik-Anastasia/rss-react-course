import { createSlice } from '@reduxjs/toolkit';
import { ICardForm } from './../types/interfaces';

type IFormState = {
  cardForm: ICardForm[];
  modal: boolean;
};

const initialState: IFormState = {
  cardForm: [],
  modal: false,
};

const formReducer = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addformCard(state, action) {
      state.cardForm.push(action.payload);
    },
    toggleModal(state, action) {
      state.modal = action.payload;
    },
  },
});

export default formReducer.reducer;
export const { addformCard, toggleModal } = formReducer.actions;
