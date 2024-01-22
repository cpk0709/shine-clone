/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unicorn/prefer-spread */
import type { Reducer } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { persistReducer, persistStore } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import type { Common } from '@/stores/features/common';
import commons from '@/stores/features/common';

const createNoopStorage = () => ({
  getItem(_key: any) {
    // eslint-disable-next-line unicorn/no-null
    return Promise.resolve(null);
  },
  setItem(_key: any, value: any) {
    return Promise.resolve(value);
  },
  removeItem(_key: any) {
    return Promise.resolve();
  },
});

const storage =
  typeof window === 'undefined'
    ? createNoopStorage()
    : createWebStorage('local');

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['commons'],
};

const rootReducer = combineReducers({
  commons,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeConfigureStore = (reducer: Reducer) =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST'],
        },
      }),
  });

const store = makeConfigureStore(persistedReducer);
export const persistor = persistStore(store);

const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return makeConfigureStore(rootReducer);
  }

  return { persistor, ...store };
};

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});

export type RootState = {
  commons: Common;
};
