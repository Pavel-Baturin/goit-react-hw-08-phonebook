import axios from 'axios';

const fetchContactsApi = async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return error.message;
  }
};

const addContactApi = async contactObj => {
  try {
    const { data } = await axios.post('/contacts', contactObj);
    return data;
  } catch (error) {
    return error.message;
  }
};

const deleteContactApi = async contactId => {
  try {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    return error.message;
  }
};

export { fetchContactsApi, addContactApi, deleteContactApi };
