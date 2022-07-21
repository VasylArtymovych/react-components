import { createSlice } from '@reduxjs/toolkit';

const initialTodos = [
  { id: 'id-1', text: 'Learn React', completed: false },
  { id: 'id-2', text: 'Learn JavaScript', completed: false },
  { id: 'id-3', text: 'Learn HTML/Css/Scss', completed: false },
];
const initialState = {
  todos: initialTodos,
  filter: '',
};
const todosSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodoToList(state, { payload }) {
      state.todos = [payload, ...state.todos];
    },

    deleteTodoFromList(state, { payload }) {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },

    toggleCompletedTodo(state, { payload }) {
      state.todos = state.todos.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );
    },

    setFilterValue(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const {
  addTodoToList,
  deleteTodoFromList,
  toggleCompletedTodo,
  setFilterValue,
} = todosSlice.actions;
export default todosSlice.reducer;
