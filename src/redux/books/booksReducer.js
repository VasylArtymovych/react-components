import { combineReducers, createReducer } from '@reduxjs/toolkit';

import { getBooks } from './booksThunks';

const items = createReducer([], {
  [getBooks.fulfilled]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getBooks.pending]: (_, { payload }) => true,
  [getBooks.fulfilled]: (_, { payload }) => false,
  [getBooks.rejected]: (_, { payload }) => false,
});

const error = createReducer('', {
  [getBooks.rejected]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  loading,
  error,
});
