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
import todosThunkReducer from './todosThunk/todosSlicer';

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
    books,
    asyncTodos: asyncTodosReducer,
    todoList: persistReducer(persistConfig, todosSliceReducer),
    todosThunk: todosThunkReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
