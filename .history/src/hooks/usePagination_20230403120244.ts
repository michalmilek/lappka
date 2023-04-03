import { useCallback, useEffect, useState } from "react";

const usePagination = (initialTotalPages: number = 0) => {
  const [totalPages, setTotalPages] = useState<number>(initialTotalPages);
  const [currentPage, setCurrentPage] = useState(1);

  //globalquery
  //totalpages - usecallback

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

  const goToPage = useCallback(
    (newPage: number) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    },
    [totalPages]
  );
  const handleAllPages = useCallback((number: number) => {
    setTotalPages(number);
  }, []);

  return {
    currentPage,
    nextPage,
    prevPage,
    goToPage,
    handleAllPages,
    totalPages,
  };
};

export default usePagination;
