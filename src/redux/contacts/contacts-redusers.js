import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
});

const isFetching = createReducer(false, {
  [addContact.pending]: () => true,
  [deleteContact.pending]: () => true,
  [fetchContacts.pending]: () => true,

  [addContact.fulfilled]: () => false,
  [deleteContact.fulfilled]: () => false,
  [fetchContacts.fulfilled]: () => false,

  [addContact.rejected]: () => false,
  [deleteContact.rejected]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { error }) => error.message,
  [fetchContacts.pending]: () => null,
  [deleteContact.rejected]: (_, { error }) => error.message,
  [deleteContact.pending]: () => null,
  [addContact.rejected]: (_, { error }) => error.message,
  [addContact.pending]: () => null,
});

export default combineReducers({
  items,
  isFetching,
  error,
});
