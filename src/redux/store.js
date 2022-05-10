import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReduser from './contacts/contacts-redusers';
import authReduser from './auth/auth-slice';
import { filterSlice } from './contacts/filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = { key: 'auth', storage, whitelist: ['token'] };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
    },
  }),
];

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterSlice.reducer,
    auth: persistReducer(authPersistConfig, authReduser),
  },
  middleware,
});

export const persistor = persistStore(store);
