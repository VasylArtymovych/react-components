import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import HeaderBar from '../HeaderBar/HeaderBar';
import { NotFoundPage } from '../../pages/NotFoundPage';
import RoutPaths from '../../RoutPaths';

// import { ProductReviewForm } from '../ProductReviewForm';
// import { LoginForm } from '../RegisterForm/LoginForm';

const HomePage = lazy(() =>
  import('../../pages/HomePage.jsx' /* webpackChunkName: 'home-page' */)
);
const AuthorsPage = lazy(() => import('../../pages/AuthorsPage.jsx'));
const AuthorSubPage = lazy(() => import('../../pages/AuthorSubPage.jsx'));
const BooksPage = lazy(() => import('../../pages/BooksPage.jsx'));
const BookDetailsPage = lazy(() => import('../../pages/BookDetailsPage.jsx'));
const TablePage = lazy(() => import('../../pages/TablePage.jsx'));
const TodosPage = lazy(() => import('../../pages/TodosPage.jsx'));
const PhoneBookPage = lazy(() => import('../../pages/PhoneBookPage.jsx'));
const RegisterFormPage = lazy(() => import('../../pages/RegisterFormPage.jsx'));
const MapPage = lazy(() => import('../../pages/map/MapPage.jsx'));

const App = () => {
  return (
    <Container>
      <HeaderBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={RoutPaths.home} element={<HomePage />} />
          <Route path={RoutPaths.authors} element={<AuthorsPage />}>
            <Route path={RoutPaths.author} element={<AuthorSubPage />} />
          </Route>

          <Route path={RoutPaths.books} element={<BooksPage />} />
          <Route path={RoutPaths.book} element={<BookDetailsPage />} />
          <Route path={RoutPaths.table} element={<TablePage />} />
          <Route path={RoutPaths.todos} element={<TodosPage />} />
          <Route path={RoutPaths.phoneBook} element={<PhoneBookPage />} />
          <Route path={RoutPaths.registerForm} element={<RegisterFormPage />} />
          {/* <Route path={RoutPaths.map} element={<MapPage />} /> */}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      {/* <LoginForm /> */}
      {/* <ProductReviewForm /> */}
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
