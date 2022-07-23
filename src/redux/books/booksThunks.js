import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks } from '../../server/sereverApi';

export const getBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await fetchBooks();
    return response;
  } catch (error) {
    return error.message;
  }
});
