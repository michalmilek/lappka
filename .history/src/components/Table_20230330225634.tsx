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
            (index / 2) % 1 ? "bg-gray-200" : "bg-white"
          } text-center`}>
          <td>
            <img
              src={OneAnimal.profilePhoto}
              alt={OneAnimal.name}
              className="h-9 w-9 rounded-full"
            />{" "}
            Ninka
          </td>
          <td>06.08.2022</td>
          <td>Kot</td>
          <td>Samiczka</td>
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
