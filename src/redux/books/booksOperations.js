// import {
//   fetchBooksRequest,
//   fetchBooksSuccess,
//   fetchBooksError,
// } from './booksActions';
// import { fetchBooks } from '../../server/sereverApi';

// export const getBooks = () => async dispatch => {
//   dispatch(fetchBooksRequest());
//   try {
//     const books = await fetchBooks();
//     dispatch(fetchBooksSuccess(books));
//   } catch (error) {
//     fetchBooksError(error.message);
//   }
// };
