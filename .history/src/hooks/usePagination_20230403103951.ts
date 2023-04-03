import { useCallback, useState } from "react";

const usePagination = (totalPages: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = useCallback(() => {
    if (currentPage === totalPages) {
      return;
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  }, [currentPage, totalPages]);

  const prevPage = useCallback(() => {
    if (currentPage === 1) {
      return;
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  }, [currentPage]);

  const goToPage = useCallback((selectedPage: number) => {
    setCurrentPage(selectedPage);
  }, []);

  const allPages = [];
  for (let i = 1; i <= totalPages; i++) {
    allPages.push(i);
  }

  return {
    currentPage,
    nextPage,
    prevPage,
    goToPage,
    allPages,
  };
};

export default usePagination;
