import axios from 'axios';
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
} from './asyncTodosActions';
axios.defaults.baseURL = 'http://localhost:4040';

export const fetchTodos = () => async dispatch => {
  dispatch(fetchTodoRequest());
  try {
    const { data } = await axios.get('/todos');
    dispatch(fetchTodoSuccess(data));
  } catch (error) {
    dispatch(fetchTodoError(error.message));
  }
};

export const addTodo = args => dispatch => {
  const todo = {
    text: args,
    completed: false,
  };
  dispatch(addTodoRequest());
  axios
    .post('/todos', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error => dispatch(addTodoError(error.message)));
};

export const deleteTodo = todoId => dispatch => {
  dispatch(deleteTodoRequest());
  axios
    .delete(`/todos/${todoId}`)
    .then(() => dispatch(deleteTodoSuccess(todoId)))
    .catch(error => dispatch(deleteTodoError(error.message)));
};

export const updateTodo =
  ({ id, completed }) =>
  dispatch => {
    dispatch(updateTodoRequest());
    const update = { completed };
    axios
      .patch(`/todos/${id}`, update)
      .then(({ data }) => dispatch(updateTodoSuccess(data)))
      .catch(error => dispatch(updateTodoError(error.message)));
  };
