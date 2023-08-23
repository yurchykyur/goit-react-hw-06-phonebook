import { createReducer } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import { createContact, deleteContact } from './actions';

export const contactReducer = createReducer(contactsInitialState, {
  [createContact]: (state, action) => {
    state.push({ ...action.payload });
  },
  [deleteContact]: (state, action) => (state = [...action.payload]),
});
