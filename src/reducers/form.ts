import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store';
import { FormSubmitValues } from 'types/form';

interface FormCardsState {
  cards: FormSubmitValues[];
}

const initialState: FormCardsState = {
  cards: [],
};

export const formSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<FormSubmitValues>) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = formSlice.actions;

export const selectFormCardsValue = (state: RootState) => state.form.cards;

export default formSlice.reducer;
