import usePagination from '../../Hooks/usePagination';
// import { StyledButton } from '../Button/Button.styled';

export default function Pagination({ pages, page }) {
  const { currentPage, goToPrevPage, goToNextPage } = usePagination({
    pages,
    page,
  });

  return (
    <>
      <button onClick={goToPrevPage}>prev</button>
      {currentPage}/{pages}
      <button onClick={goToNextPage}>next</button>
    </>
  );
}
