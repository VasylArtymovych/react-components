import { useState, useCallback } from 'react';

const DEFAULT_PER_PAGE = 20;

export default function usePagination({
  page = 1,
  pages,
  perPage = DEFAULT_PER_PAGE,
}) {
  const [currentPage, setCurrentPage] = useState(page);

  const changePage = useCallback(page => {
    setCurrentPage(page);
  }, []);

  //useMemo:
  // const changePage1 = useMemo(() =>  page => {
  //     setCurrentPage(page);
  //   }, []);

  const goToNextPage = useCallback(() => {
    if (currentPage >= pages) return;
    setCurrentPage(prevState => prevState + 1);
  }, [currentPage, pages]);

  const goToPrevPage = useCallback(() => {
    if (currentPage <= 1) return;
    setCurrentPage(prevState => prevState - 1);
  }, [currentPage]);

  return {
    currentPage,
    pages,
    perPage,
    changePage,
    goToNextPage,
    goToPrevPage,
  };
}
