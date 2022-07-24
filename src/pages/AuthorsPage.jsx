import { Suspense, useEffect } from 'react';
import { NavLink, Outlet, generatePath } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import RoutPaths from '../RoutPaths';
import { getAuthors } from '../redux/books/booksThunks';

export default function AuthorsPage() {
  const authors = useSelector(state => state.books.authors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthors());
  }, [dispatch]);

  return (
    <>
      <ul>
        {authors.map(({ id, name }) => {
          const authorPath = generatePath(RoutPaths.author, { authorId: id });

          return (
            <li key={id}>
              <NavLink to={authorPath}>{name}</NavLink>
            </li>
          );
        })}
      </ul>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet context={authors} />
      </Suspense>
    </>
  );
}
