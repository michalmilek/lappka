import React, { useMemo } from "react";
import { Animal } from "./AnimalCards";

const Table = ({ animals }: { animals: Animal[] }) => {
  return (
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
      {animals?.map((OneAnimal, index) => (
        <tr
          className={`${
            (index / 2) % 1 ? "bg-gray-100" : "bg-white"
          } text-center`}>
          <td className="flex items-center justify-center gap-4">
            <img
              src={OneAnimal.profilePhoto}
              alt={OneAnimal.name}
              className="h-7 w-7 rounded-full"
            />{" "}
            Ninka
          </td>
          <td>{new Date(OneAnimal.createdAt).toLocaleDateString("pl-PL")}</td>
          <td>{OneAnimal.name}</td>
          <td
            className={`${
              OneAnimal.gender === "Male"
                ? "bg-midGray3 text-white px-1 py-1"
                : "Samiczka"
            }`}>
            {OneAnimal.gender === "Male" ? "Samiec" : "Samiczka"}
          </td>
          <td>Jasny</td>
          <td>Waga</td>
          <td>Tak</td>
          <td>Nie</td>
          <td>---</td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
