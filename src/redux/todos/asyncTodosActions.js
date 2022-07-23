import { createAction } from '@reduxjs/toolkit';

export const fetchTodoRequest = createAction('asyncTodos/fetchTodoRequest');
export const fetchTodoSuccess = createAction('asyncTodos/fetchTodoSuccess');
export const fetchTodoError = createAction('asyncTodos/fetchTodoError');

export const addTodoRequest = createAction('asyncTodos/addTodoRequest');
export const addTodoSuccess = createAction('asyncTodos/addTodoSuccess');
export const addTodoError = createAction('asyncTodos/addTodoError');

export const deleteTodoRequest = createAction('asyncTodos/deleteTodoRequest');
export const deleteTodoSuccess = createAction('asyncTodos/deleteTodoSuccess');
export const deleteTodoError = createAction('asyncTodos/deleteTodoError');

export const updateTodoRequest = createAction('asyncTodos/updateTodoRequest');
export const updateTodoSuccess = createAction('asyncTodos/updateTodoSuccess');
export const updateTodoError = createAction('asyncTodos/updateTodoError');

export const changeFilter = createAction('todos/changeFilter');
