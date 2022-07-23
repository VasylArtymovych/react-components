import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040';

export const fetchTodos = () => {
  return axios.get('/todos').then(response => response.data);
};

export const addTodo = todo => {
  return axios.post('/todos', todo).then(({ data }) => data);
};

export const deleteTodo = todoId => {
  return axios.delete(`/todos/${todoId}`);
};

export const updateTodo = (todoId, update) => {
  return axios.patch(`/todos/${todoId}`, update).then(({ data }) => data);
};

// books=====================================

export async function fetchAuthors() {
  const { data } = await axios.get(`/authors?_embed=books`);
  return data;
}

export async function fetchBooks() {
  const { data } = await axios.get(`/books`);
  return data;
}

export async function fetchBookById(bookId) {
  const { data } = await axios.get(`/books/${bookId}?_expand=author`);
  return data;
}
