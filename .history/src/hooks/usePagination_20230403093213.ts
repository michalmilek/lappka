import { useState } from "react";

function usePagination(totalPages) {
  const [currentPage, setCurrentPage] = useState(1);

  function nextPage() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
  }

  function prevPage() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
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
