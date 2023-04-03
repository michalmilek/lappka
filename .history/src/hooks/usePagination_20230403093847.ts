import { useState } from "react";

export default function usePagination(totalPages?: number) {
  const [currentPage, setCurrentPage] = useState(1);

  function nextPage() {
    if (currentPage === totalPages) {
      return;
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  }

  function prevPage() {
    if (currentPage === 1) {
      return;
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  }

  function goToPage(selectedPage: number) {
    setCurrentPage(selectedPage);
  }

  return {
    currentPage,
    nextPage,
    prevPage,
    goToPage,
  };
}
