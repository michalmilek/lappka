import { useCallback, useState } from "react";

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
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

  const goToPage = useCallback((selectedPage: number) => {
    setCurrentPage(selectedPage);
  }, []);

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
