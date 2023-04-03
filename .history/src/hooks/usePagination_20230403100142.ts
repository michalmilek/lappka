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
