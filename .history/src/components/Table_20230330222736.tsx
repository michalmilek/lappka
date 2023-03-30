import React, { useMemo } from "react";
import { Animal } from "./AnimalCards";

const Table = ({ animals }: { animals: Animal[] }) => {
  const data = useMemo(() => animals, [animals]);

  return (
    <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
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
