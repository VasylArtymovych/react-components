import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import timer from './timer/timerReducer';
import todosSliceReducer from './todos/todosSlice';
import { asyncTodosReducer } from './todos/asyncTodosReducer';
import books from './books';

const persistConfig = {
  key: 'todoList',
  storage,
  blacklist: ['filter'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const store = configureStore({
  reducer: {
    timer,
    asyncTodos: asyncTodosReducer,
    books,
    todoList: persistReducer(persistConfig, todosSliceReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
