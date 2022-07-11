import { useParams } from 'react-router-dom';
import { getBookById, getAuthorById } from '../fakeAPI';

export const BookDetailsPage = () => {
  const { bookId } = useParams();
  const book = getBookById(Number(bookId));
  const author = getAuthorById(book.authorId);

  return (
    <>
      <img src={book.imgUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p>
        <span>Author</span>: {author.name}
      </p>
      <p>
        <span>Description</span>: {book.descr}
      </p>
    </>
  );
};
