import axios from 'axios';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (objData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', objData);
      if (!data.user) {
        throw new Error('Error request');
      }
      token.set(data.token);
      toast.success(`Welcome to the application Phonebook`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
  'auth/login',
  async (objData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', objData);
      if (!data.user) {
        throw new Error('Error request');
      }
      token.set(data.token);
      toast.success(`Welcome to the application Phonebook`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/logout');
      if (!data.token) {
        throw new Error('Error request');
      }
      token.unset(data.token);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (persistedToken === null) {
      thunkAPI.rejectedWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return error;
    }
  }
);

export { register, logIn, logOut, fetchCurrentUser };
