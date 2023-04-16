// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';

// import { addContact, deleteContact, setFilter } from './actions';

// const contactsInitialState = [];

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return [...state, action.payload];
//     case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };

// export const contactsReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     return [...state, action.payload];
//   },
//   [deleteContact]: (state, action) => {
//     return state.filter(contact => contact.id !== action.payload);
//   },
// });

// ----------------------------------

// const filterInitialState = '';

// export const filterReducer = createReducer(filterInitialState, {
//   [setFilter]: (state, action) => {
//     return action.payload;
//   },
// });

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case setFilter.type:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// export default rootReducer;
