import React, { useMemo } from "react";
import { Animal } from "./AnimalCards";

const Table = ({ animals }: { animals: Animal[] }) => {
  const data = useMemo(() => animals, [animals]);

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
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
    </table>
  );
};

export default Table;
