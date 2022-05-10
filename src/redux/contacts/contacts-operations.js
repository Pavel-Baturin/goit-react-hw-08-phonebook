import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContactsApi,
  addContactApi,
  deleteContactApi,
} from './contactApi';

const fetchContacts = createAsyncThunk('contacts/getContact', async () => {
  return await fetchContactsApi();
});

const addContact = createAsyncThunk('contacts/addContact', async contactObj => {
  return await addContactApi(contactObj);
});

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    return await deleteContactApi(contactId);
  }
);

export { fetchContacts, addContact, deleteContact };
