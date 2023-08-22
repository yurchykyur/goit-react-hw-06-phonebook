import { initialState } from '../initialState';

export const filterReducer = (state = initialState.filter, action) => {
  switch (action) {
    case 'contact/filter':
      break;
    default:
      return state;
  }
};
