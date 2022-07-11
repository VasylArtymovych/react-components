import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
// import { Todos } from '../Todos/Todos';
import HeaderBar from '../HeaderBar/HeaderBar';
import { HomePage } from '../../pages/HomePage';
import { AuthorsPage } from '../../pages/AuthorsPage';
import { BooksPage } from '../../pages/BooksPage';
import { NotFoundPage } from '../../pages/NotFoundPage';

import { BookDetailsPage } from '../../pages/BookDetailsPage';
import { AuthorSubPage } from '../../pages/AuthorSubPage';

// import { ProductReviewForm } from '../ProductReviewForm';
// import { LoginForm } from '../RegisterForm/LoginForm';

// import { ContactBook } from '../ContactBook';
// import { RegisterForm } from '../RegisterForm/RegisterForm';

const App = () => {
  return (
    <Container>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authors" element={<AuthorsPage />}>
          <Route path=":authorId" element={<AuthorSubPage />} />
        </Route>

        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:bookId" element={<BookDetailsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* <Todos /> */}

      {/* <LoginForm /> */}
      {/* <ProductReviewForm /> */}

      {/* <ContactBook />
      <RegisterForm /> */}
    </Container>
  );
};

export default App;

const Container = styled('div')`
  padding: 0 20px;
  margin: 0 auto;

  width: 480px;
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1024px) {
    width: 1024px;
  }
`;
