import { combineReducers, createReducer } from '@reduxjs/toolkit';

import { getBooks, getAuthors, getBookById } from './booksThunks';

const items = createReducer([], {
  [getBooks.fulfilled]: (_, { payload }) => payload,
});

const authors = createReducer([], {
  [getAuthors.fulfilled]: (state, { payload }) => payload,
});

const book = createReducer(null, {
  [getBookById.fulfilled]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getBooks.pending]: (_, { payload }) => true,
  [getBooks.fulfilled]: (_, { payload }) => false,
  [getBooks.rejected]: (_, { payload }) => false,
  [getAuthors.pending]: (_, { payload }) => true,
  [getAuthors.fulfilled]: (_, { payload }) => false,
  [getAuthors.rejected]: (_, { payload }) => false,
  [getBookById.pending]: (_, { payload }) => true,
  [getBookById.fulfilled]: (_, { payload }) => false,
  [getBookById.rejected]: (_, { payload }) => false,
});

const error = createReducer('', {
  [getBooks.rejected]: (_, { payload }) => payload,
  [getAuthors.rejected]: (_, { payload }) => payload,
  [getBookById.rejected]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  authors,
  book,
  loading,
  error,
});
