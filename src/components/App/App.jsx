import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import HeaderBar from '../HeaderBar/HeaderBar';
// import HomePage from '../../pages/HomePage';
// import AuthorsPage from '../../pages/AuthorsPage';
// import AuthorSubPage from '../../pages/AuthorSubPage';
// import BooksPage from '../../pages/BooksPage';
// import BookDetailsPage from '../../pages/BookDetailsPage';
// import TablePage from '../../pages/TablePage';
import { NotFoundPage } from '../../pages/NotFoundPage';

const HomePage = lazy(() =>
  import('../../pages/HomePage.jsx' /* webpackChunkName: 'home-page' */)
);
const AuthorsPage = lazy(() => import('../../pages/AuthorsPage.jsx'));
const AuthorSubPage = lazy(() => import('../../pages/AuthorSubPage.jsx'));
const BooksPage = lazy(() => import('../../pages/BooksPage.jsx'));
const BookDetailsPage = lazy(() => import('../../pages/BookDetailsPage.jsx'));
const TablePage = lazy(() => import('../../pages/TablePage.jsx'));

// import { Todos } from '../Todos/Todos';
// import { ProductReviewForm } from '../ProductReviewForm';
// import { LoginForm } from '../RegisterForm/LoginForm';
// import { ContactBook } from '../ContactBook';
// import { RegisterForm } from '../RegisterForm/RegisterForm';

const App = () => {
  return (
    <Container>
      <HeaderBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authors" element={<AuthorsPage />}>
            <Route path=":authorId" element={<AuthorSubPage />} />
          </Route>

          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:bookId" element={<BookDetailsPage />} />
          <Route path="/table" element={<TablePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

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
