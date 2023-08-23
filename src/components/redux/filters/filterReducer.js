import { filterInitialState } from './initialState';
import { CONTACT_FILTER } from './types';

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case CONTACT_FILTER:
      return action.payload;

    default:
      return state;
  }
};
