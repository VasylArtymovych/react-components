import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { booksThunks } from '../redux/books';

export default function BooksPage() {
  const { pathname } = useLocation();
  const books = useSelector(state => state.books.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksThunks.getBooks());
  }, [dispatch]);

  return (
    <>
      {books.length > 0 && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link to={`${pathname}/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
