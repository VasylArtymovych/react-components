import { Suspense } from 'react';
import { NavLink, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { getAuthors } from '../fakeAPI';

export default function AuthorsPage() {
  const authors = getAuthors();

  return (
    <>
      <ul>
        {authors.map(author => (
          <li key={author.id}>
            <NavLink to={`/authors/${author.id}`}>{author.name}</NavLink>
          </li>
        ))}
      </ul>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet context={authors} />
      </Suspense>
    </>
  );
}
