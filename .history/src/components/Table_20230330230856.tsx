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
                ? "bg-midGray3 text-white rounded-lg w-12 px-1"
                : "bg-Primary/PR500 text-white rounded-lg w-16 px-4 py-1"
            }`}>
            {OneAnimal.gender === "Male" ? "Samiec" : "Samiczka"}
          </td>
          <td>{OneAnimal.breed}</td>
          <td>{OneAnimal.weight}</td>
          <td>{OneAnimal.isSterilized ? "Tak" : "Nie"}</td>
          <td>Nie</td>
          <td>---</td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
