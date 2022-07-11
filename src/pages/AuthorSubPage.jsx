import { useParams, useOutletContext, Link } from 'react-router-dom';
import { getAuthorBooks } from '../fakeAPI';

export const AuthorSubPage = () => {
  const { authorId } = useParams();
  const books = getAuthorBooks(Number(authorId));
  const authors = useOutletContext();
  const [author] = authors.filter(autr => autr.id === Number(authorId));

  return (
    <>
      <h2>{author.name}</h2>

      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
