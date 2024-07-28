import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from 'redux-persist';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {authSlice} from './reducer/auth';
import {localeSlice} from './reducer/locale';

const persistConfig = {
  key: 'RNApp',
  storage: AsyncStorage,
  whitelist: [authSlice.name, localeSlice.name],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [authSlice.name]: authSlice.reducer,
    [localeSlice.name]: localeSlice.reducer,
  }),
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: false,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types
