import React, { useMemo, useState } from "react";
import useShelterCards from "../hooks/useShelterCards";
import { Animal } from "./AnimalCards";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: animals,
    isSuccess,
    isError,
    isLoading,
    error,
  } = useShelterCards(currentPage);

  if (isError) {
    return <div>{error as string}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const allPages = [];
  if (isSuccess) {
    for (let i = 1; i <= animals?.totalPages; i++) {
      allPages.push(i);
    }
  }

  const toNextPage = () => {
    if (currentPage === allPages.length) {
      return;
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const toPrevPage = () => {
    if (currentPage === 1) {
      return;
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full flex flex-col justify-end gap-3">
      <table className="w-full border-separate">
        <tr>
          <th className="py-3">Imię zwierzaka</th>
          <th className="py-3">Data dodania</th>
          <th className="py-3">Gatunek</th>
          <th className="py-3">Płeć</th>
          <th className="py-3">Umaszczenie</th>
          <th className="py-3">Waga</th>
          <th className="py-3">Sterylizacja</th>
          <th className="py-3">Widoczny</th>
          <th className="py-3">Akcja</th>
        </tr>
        {animals?.items.map((OneAnimal: Animal, index: number) => (
          <tr
            className={`${
              (index / 2) % 1 ? "bg-gray-100" : "bg-white"
            } text-center mt-5`}>
            <td className="flex items-center justify-center gap-4 py-3">
              <img
                src={OneAnimal.profilePhoto}
                alt={OneAnimal.name}
                className="h-7 w-7 rounded-full"
              />
              {OneAnimal.name}
            </td>
            <td>{new Date(OneAnimal.createdAt).toLocaleDateString("pl-PL")}</td>
            <td>{OneAnimal.type}</td>
            <td
              className={`${
                OneAnimal.gender === "Male"
                  ? "bg-midGray3 text-white rounded-lg w-12 px-1"
                  : "bg-Primary/PR500 text-white rounded-lg w-16 px-4 py-1"
              }`}>
              {OneAnimal.gender === "Male" ? "Samiec" : "Samiczka"}
            </td>
            <td>{OneAnimal.breed}</td>
            <td>{OneAnimal.weight}</td>
            <td>{OneAnimal.isSterilized ? "Tak" : "Nie"}</td>
            <td>{OneAnimal.isVisible ? "Tak" : "Nie"}</td>
            <td>---</td>
          </tr>
        ))}
      </table>
      <div className="flex pl-[85%] w-full justify-center items-center gap-3">
        <AiOutlineArrowLeft
          onClick={() => toPrevPage()}
          className="arrow"
        />
        {allPages.map((pageNumber) => (
          <span
            className={`arrow ${pageNumber === currentPage && "font-bold"}`}
            onClick={() => setCurrentPage(pageNumber)}>
            {pageNumber}
          </span>
        ))}
        <AiOutlineArrowRight
          onClick={() => toNextPage()}
          className="arrow"
        />
      </div>
    </div>
  );
};

export default Table;
