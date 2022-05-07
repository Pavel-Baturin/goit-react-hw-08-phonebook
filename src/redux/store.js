import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './contacts/filterSlice';
import { contactApi } from './contacts/contactApi';
import authReduser from './auth/auth-slice';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    auth: authReduser,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});
