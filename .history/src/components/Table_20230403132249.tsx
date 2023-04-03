import React, { useCallback, useEffect, useMemo, useState } from "react";
import useShelterCards from "../hooks/useShelterCards";
import { Animal } from "./AnimalCards";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import usePagination from "../hooks/usePagination";
import { useSearchParams } from "react-router-dom";

const Table = () => {
  const {
    currentPage,
    nextPage,
    prevPage,
    goToPage,
    totalPages,
    handleAllPages,
  } = usePagination();

  const {
    data: animals,
    isSuccess,
    isError,
    isLoading,
    isFetching,
    error,
  } = useShelterCards(currentPage);

  useEffect(() => {
    if (isSuccess) {
      handleAllPages(animals?.totalPages);
    }
  }, [animals?.totalPages, handleAllPages, isSuccess]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ page: currentPage.toString() });
  }, [currentPage, setSearchParams]);

  useEffect(() => {
    const page = searchParams.get("page");
    if (page) {
      goToPage(+page);
    }
  }, [searchParams, goToPage]);

  //const perPage = searchParams.get("perPage");

  let allPages = [];
  for (let i = 1; i <= totalPages; i++) {
    allPages.push(i);
  }

  if (isError) {
    return <div>{error as any}</div>;
  }

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col justify-end gap-3">
      <table className="w-full border-separate">
        <thead>
          <tr>
            <th className="py-3">Imię zwierzaka</th>
            <th className="py-3">Data dodania</th>
            <th className="py-3">Gatunek</th>
            <th className="py-3 w-[50px]">Płeć</th>
            <th className="py-3">Umaszczenie</th>
            <th className="py-3">Waga</th>
            <th className="py-3">Sterylizacja</th>
            <th className="py-3">Widoczny</th>
            <th className="py-3">Akcja</th>
          </tr>
        </thead>
        <tbody>
          {animals.items.length !== 0 &&
            animals?.items.map((OneAnimal: Animal, index: number) => (
              <tr
                key={index + OneAnimal.name}
                className={`${
                  (index / 2) % 1 ? "bg-gray-100" : "bg-white"
                } text-center `}>
                <td className="flex items-center justify-start pl-10 gap-4 py-2">
                  <img
                    src={OneAnimal.profilePhoto}
                    alt={OneAnimal.name}
                    className="h-7 w-7 rounded-full"
                  />
                  {OneAnimal.name}
                </td>
                <td>
                  {new Date(OneAnimal.createdAt).toLocaleDateString("pl-PL")}
                </td>
                <td>{OneAnimal.type}</td>
                <td className="min-w-[130px]">
                  <span
                    className={`${
                      OneAnimal.gender === "Male"
                        ? "bg-midGray3 text-white rounded-lg w-12 px-3 py-1"
                        : "bg-Primary/PR500 text-white rounded-lg w-16 px-3 py-1"
                    }`}>
                    {OneAnimal.gender === "Male" ? "Samiec" : "Samiczka"}
                  </span>
                </td>
                <td>{OneAnimal.breed}</td>
                <td>{OneAnimal.weight}</td>
                <td>{OneAnimal.isSterilized ? "Tak" : "Nie"}</td>
                <td>{OneAnimal.isVisible ? "Tak" : "Nie"}</td>
                <td>---</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="px-5 w-full flex justify-between items-center">
        <select
          name="perPage"
          id="">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="12">12</option>
        </select>
        <div className="flex justify-center items-center gap-3">
          <AiOutlineArrowLeft
            onClick={() => prevPage()}
            className="arrow"
          />
          {allPages.map((pageNumber: number) => (
            <span
              key={pageNumber}
              className={`arrow ${pageNumber === currentPage && "font-bold"}`}
              onClick={() => {
                goToPage(pageNumber);
                //setSearchParams({ page: pageNumber.toString() });
              }}>
              {pageNumber}
            </span>
          ))}
          <AiOutlineArrowRight
            onClick={() => {
              nextPage();
            }}
            className="arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
