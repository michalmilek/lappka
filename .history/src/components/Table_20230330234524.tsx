import React, { useMemo, useState } from "react";
import useShelterCards from "../hooks/useShelterCards";
import { Animal } from "./AnimalCards";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: animals } = useShelterCards(currentPage);

  const allPages = [];
  for (let i = 1; i <= animals.totalPages; i++) {
    allPages.push(i);
  }

  const toNextPage = () => {
    if (currentPage === animals.totalPages) {
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
    <div className="w-full flex flex-col justify-end">
      <table className="w-full">
        <tr>
          <th>Imię zwierzaka</th>
          <th>Data dodania</th>
          <th>Gatunek</th>
          <th>Płeć</th>
          <th>Umaszczenie</th>
          <th>Waga</th>
          <th>Sterylizacja</th>
          <th>Widoczny</th>
          <th>Akcja</th>
        </tr>
        {animals?.items.map((OneAnimal: Animal, index: number) => (
          <tr
            className={`${
              (index / 2) % 1 ? "bg-gray-100" : "bg-white"
            } text-center`}>
            <td className="flex items-center justify-center gap-4">
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
      <div className="flex border pl-[85%] w-full justify-center items-center gap-3">
        <AiOutlineArrowLeft
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="arrow"
        />
        {allPages.map((pageNumber) => (
          <span
            className="cursor-pointer hover:text-gray-400 transition-all"
            onClick={() => setCurrentPage(pageNumber)}>
            {pageNumber}
          </span>
        ))}
        <AiOutlineArrowRight className="arrow" />
      </div>
    </div>
  );
};

export default Table;