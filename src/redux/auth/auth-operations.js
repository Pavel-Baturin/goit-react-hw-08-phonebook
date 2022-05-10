import axios from 'axios';
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

const register = createAsyncThunk('auth/register', async objData => {
  try {
    const { data } = await axios.post('/users/signup', objData);
    token.set(data.token);
    return data;
  } catch (error) {
    return error.message;
  }
});

const logIn = createAsyncThunk('auth/login', async objData => {
  try {
    const { data } = await axios.post('/users/login', objData);
    token.set(data.token);
    return data;
  } catch (error) {
    return error.message;
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset(data.token);
  } catch (error) {
    return error.message;
  }
});

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
