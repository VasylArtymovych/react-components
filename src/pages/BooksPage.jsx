import { useState, useEffect } from 'react';
import { Link, useHref, useLocation } from 'react-router-dom';

import { getBooks } from '../fakeAPI';

export default function BooksPage() {
  const [books, setBooks] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setBooks(getBooks());
  }, []);

  return (
    <>
      {books && (
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
