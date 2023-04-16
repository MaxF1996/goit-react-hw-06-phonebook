// import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import rootReducer from './reducer';

export const store = createStore(rootReducer);

// console.log('store :>>', store);

// store.dispatch({ type: 'contacts/addContact', payload: 1 });

// console.log(store.getState());
