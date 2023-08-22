import { contactsInitialState } from './initialState';
import { CONTACT_CREATE, CONTACT_DELETE } from './types';

export const contactReducer = (state = contactsInitialState, action) => {
  switch (action) {
    case CONTACT_CREATE:
      return { ...state, contacts: [...state, { ...action.payload }] };

    case CONTACT_DELETE:
      break;

    default:
      return state;
  }
};
