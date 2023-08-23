import { contactsInitialState } from './initialState';
import { CONTACT_CREATE, CONTACT_DELETE } from './types';

export const contactReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case CONTACT_CREATE:
      return [...state, { ...action.payload }];

    case CONTACT_DELETE:
      return [...action.payload];

    default:
      return state;
  }
};
