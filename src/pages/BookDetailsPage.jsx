import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getBookById } from '../redux/books/booksThunks';

export default function BookDetailsPage() {
  const { bookId } = useParams();
  const book = useSelector(state => state.books.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookById(bookId));
  }, [bookId, dispatch]);
  if (!book) return;
  return (
    <>
      <img src={book.imgUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p>
        <span>Author</span>: {book.author.name}
      </p>
      <p>
        <span>Description</span>: {book.descr}
      </p>
    </>
  );
}
