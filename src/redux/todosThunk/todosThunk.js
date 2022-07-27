import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchThunkTodos = createAsyncThunk(
  'todosThunk/fetchTodos',
  async () => {
    try {
      const { data } = await axios.get('/todos');
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const addThunkTodo = createAsyncThunk(
  'todosThunk/addTodo',
  async text => {
    const todo = {
      text: text,
      completed: false,
    };
    try {
      const { data } = await axios.post('/todos', todo);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteThunkTodo = createAsyncThunk(
  'todosThunk/deleteTodo',
  async todoId => {
    try {
      await axios.delete(`/todos/${todoId}`);
      return todoId;
    } catch (error) {
      return error;
    }
  }
);

export const updateThunkTodo = createAsyncThunk(
  'todosThunk/updateTodo',
  async ({ id, completed }) => {
    const update = { completed };
    try {
      await axios.patch(`/todos/${id}`, update);
      return id;
    } catch (error) {
      return error;
    }
  }
);
