import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAuthors,
  fetchBooks,
  fetchBookById,
} from '../../server/sereverApi';

export const getBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await fetchBooks();
    return response;
  } catch (error) {
    return error.message;
  }
});

export const getAuthors = createAsyncThunk('books/fetchAuthors', async () => {
  try {
    const authors = await fetchAuthors();
    return authors;
  } catch (error) {
    return error.message;
  }
});

export const getBookById = createAsyncThunk('books/fetchBookById', async id => {
  try {
    const response = fetchBookById(id);
    return response;
  } catch (error) {
    return error.message;
  }
});
