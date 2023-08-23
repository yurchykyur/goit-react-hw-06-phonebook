import { createReducer } from '@reduxjs/toolkit';
import { filterInitialState } from './initialState';
import { filterContact } from './actions';

export const filterReducer = createReducer(filterInitialState, {
  [filterContact]: (state, action) => (state = action.payload),
});
