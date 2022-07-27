import { createSlice } from '@reduxjs/toolkit';
import {
  fetchThunkTodos,
  addThunkTodo,
  deleteThunkTodo,
  updateThunkTodo,
} from './todosThunk';

const todosThunkSlice = createSlice({
  name: 'todosThunk',
  initialState: { todos: [], filter: '', eroor: '' },
  reducers: {
    updateFilter: (state, { payload }) => ({ ...state, filter: payload }),
  },
  extraReducers: {
    [fetchThunkTodos.fulfilled]: (state, { payload }) => ({
      ...state,
      todos: payload,
    }),
    [fetchThunkTodos.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    [addThunkTodo.fulfilled]: (state, { payload }) => ({
      ...state,
      todos: [payload, ...state.todos],
    }),
    [addThunkTodo.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    [deleteThunkTodo.fulfilled]: (state, { payload }) => ({
      ...state,
      todos: state.todos.filter(todo => todo.id !== payload),
    }),
    [deleteThunkTodo.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    [updateThunkTodo.fulfilled]: (state, { payload }) => ({
      ...state,
      todos: state.todos.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      ),
    }),
    [updateThunkTodo.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
});

export const { updateFilter } = todosThunkSlice.actions;

export default todosThunkSlice.reducer;
