import { combineReducers } from 'redux';

import { contactReducer } from './contacts/contactReducer';
import { filterReducer } from './filters/filterReducer';

export const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
