import {
  useParams,
  useOutletContext,
  Link,
  generatePath,
} from 'react-router-dom';
import RoutPaths from '../RoutPaths';

export default function AuthorSubPage() {
  const { authorId } = useParams();
  const authors = useOutletContext();
  if (authors.length === 0) return;
  const [author] = authors.filter(autr => autr.id === Number(authorId));

  return (
    <>
      <h2>{author.name}</h2>

      <ul>
        {author.books.map(({ id, title }) => {
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
