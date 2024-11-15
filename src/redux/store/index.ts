// /* eslint-disable import/extensions */
import {persistStore, persistReducer} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';

// import PackageSliceReducer from '../slide/package.slice';
import {persistConfig} from './PersistConfig';
import RootReducer from './RootReducer';

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = configureStore({
  reducer: {
    //persisted
    persistedReducer,

    //Reducer
    // PackageSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
