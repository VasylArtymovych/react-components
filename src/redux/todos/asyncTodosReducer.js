import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  updateTodoRequest,
  updateTodoSuccess,
  updateTodoError,
  fetchTodoRequest,
  fetchTodoSuccess,
  fetchTodoError,
  changeFilter,
} from './asyncTodosActions';

const todos = createReducer([], {
  [fetchTodoSuccess]: (_, { payload }) => payload,
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [deleteTodoSuccess]: (state, { payload }) =>
    state.filter(todo => todo.id !== payload),
  [updateTodoSuccess]: (state, { payload }) =>
    state.map(todo => (todo.id === payload.id ? payload : todo)),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => {
    return payload;
  },
});

const loading = createReducer(false, {
  [fetchTodoRequest]: () => true,
  [fetchTodoSuccess]: () => false,
  [fetchTodoError]: () => false,
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
  [deleteTodoRequest]: () => true,
  [deleteTodoSuccess]: () => false,
  [deleteTodoError]: () => false,
  [updateTodoRequest]: () => true,
  [updateTodoSuccess]: () => false,
  [updateTodoError]: () => false,
});

const error = createReducer('', {
  [fetchTodoError]: (_, { payload }) => payload,
  [addTodoError]: (_, { payload }) => payload,
  [deleteTodoError]: (_, { payload }) => payload,
  [updateTodoError]: (_, { payload }) => payload,
});

export const asyncTodosReducer = combineReducers({
  todos,
  filter,
  loading,
  error,
});
