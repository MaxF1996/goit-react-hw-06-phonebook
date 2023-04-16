import { nanoid } from 'nanoid';

export const addContact = contact => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    },
  };
};
export const deleteContact = contactID => {
  return {
    type: 'contacts/deleteContact',
    payload: contactID,
  };
};
export const setFilter = filter => {
  return {
    type: 'filter/setFilter',
    payload: filter,
  };
};
