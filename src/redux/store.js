import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactApi } from './contactApi';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});
