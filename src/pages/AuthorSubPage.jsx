import {
  useParams,
  useOutletContext,
  Link,
  generatePath,
} from 'react-router-dom';
import { getAuthorBooks } from '../fakeAPI';
import RoutPaths from '../RoutPaths';

export default function AuthorSubPage() {
  const { authorId } = useParams();
  const books = getAuthorBooks(Number(authorId));
  const authors = useOutletContext();
  const [author] = authors.filter(autr => autr.id === Number(authorId));

  return (
    <>
      <h2>{author.name}</h2>

      <ul>
        {books.map(({ id, title }) => {
          const bookPath = generatePath(RoutPaths.book, { bookId: id });
          return (
            <li key={id}>
              <Link to={bookPath}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
