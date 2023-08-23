import { CONTACT_FILTER } from './types';

export const filterContact = string => ({
  type: CONTACT_FILTER,
  payload: string,
});
