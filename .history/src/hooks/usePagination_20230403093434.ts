import { useState } from "react";

export default function usePagination(totalPages: number) {
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

  function goToPage(page) {
    const pageNumber = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNumber);
  }

  return {
    currentPage,
    nextPage,
    prevPage,
    goToPage,
  };
}
