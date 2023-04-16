// import { createAction, nanoid } from '@reduxjs/toolkit';
// // import { nanoid } from 'nanoid';

// // export const addContact = contact => {
// //   return {
// //     type: 'contacts/addContact',
// //     payload: {
// //       id: nanoid(),
// //       name: contact.name,
// //       number: contact.number,
// //     },
// //   };
// // };

// export const addContact = createAction('contacts/addContact', contact => {
//   return {
//     payload: {
//       id: nanoid(),
//       name: contact.name,
//       number: contact.number,
//     },
//   };
// });

// export const deleteContact = createAction('contacts/deleteContact');

// export const setFilter = createAction('filter/setFilter');

// // export const deleteContact = contactID => {
// //   return {
// //     type: 'contacts/deleteContact',
// //     payload: contactID,
// //   };
// // };
// // export const setFilter = filter => {
// //   return {
// //     type: 'filter/setFilter',
// //     payload: filter,
// //   };
// // };
