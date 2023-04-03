import { useState } from "react";

const usePagination = (totalPages: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage === totalPages) {
      return;
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage === 1) {
      return;
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToPage = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  return {
    currentPage,
    nextPage,
    prevPage,
    goToPage,
  };
};

export default usePagination;
