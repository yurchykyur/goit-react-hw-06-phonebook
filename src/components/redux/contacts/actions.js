import { CONTACT_CREATE, CONTACT_DELETE } from './types';

export const createContact = obj => ({ type: CONTACT_CREATE, payload: obj });
export const deleteContact = arr => ({ type: CONTACT_DELETE, payload: arr });
