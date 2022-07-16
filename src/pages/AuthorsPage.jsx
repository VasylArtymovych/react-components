import { Suspense } from 'react';
import { NavLink, Outlet, generatePath } from 'react-router-dom';
import { getAuthors } from '../fakeAPI';
import RoutPaths from '../RoutPaths';

export default function AuthorsPage() {
  const authors = getAuthors();

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
