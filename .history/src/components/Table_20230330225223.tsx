import React, { useMemo } from "react";
import { Animal } from "./AnimalCards";

const Table = ({ animals }: { animals: Animal[] }) => {
  return (
    <table>
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
        <tr className={`${(index / 2) % 0 ? "bg-gray-500" : "bg-white"}`}>
          <td>Ninka</td>
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
