import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const usePagination = (initialTotalPages: number = 0) => {
  const [totalPages, setTotalPages] = useState<number>(initialTotalPages);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(() => {
    const page = searchParams.get("page");
    if (page) {
      return +page;
    }

    return 1;
  });

  const [currentPerPage, setCurrentPerPage] = useState(() => {
    const perPage = searchParams.get("perPage");
    if (perPage) {
      return +perPage;
    }

    return 10;
  });

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

  const handlePerPage = useCallback((number: number) => {
    setCurrentPerPage(number);
  }, []);

  return {
    currentPage,
    nextPage,
    prevPage,
    goToPage,
    handleAllPages,
    totalPages,
    currentPerPage,
    handlePerPage,
  };
};

export default usePagination;
