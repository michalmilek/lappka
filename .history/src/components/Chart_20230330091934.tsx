import React, { useState } from "react";
import DatePicker from "react-date-picker";

import { BsBriefcase } from "react-icons/bs";

const Chart = () => {
  const [dateValue, setDateValue] = useState(new Date());

  return (
    <div>
      <div>
        <h3>Liczba wyświetleń podopiecznych</h3>
        <select>
          <option value="year">Rok</option>
          <option value="month">Miesiąc</option>
        </select>
      </div>
    </div>
  );
};

export default Chart;
