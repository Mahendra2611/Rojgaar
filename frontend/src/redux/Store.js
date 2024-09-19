
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session'; // Use session storage instead of local storage
import rootReducer from "./rootReducers";


const persistConfig = {
  key: 'root',
  storage:sessionStorage,
  whitelist: ['user','job','intern'], // Reducers you want to persist
};


const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create persistor
const persistor = persistStore(store);

export { store, persistor };
