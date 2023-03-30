import React, { useState } from "react";
import DatePicker from "react-date-picker";

import { BsBriefcase } from "react-icons/bs";

const Chart = () => {
  const [dateValue, setDateValue] = useState(new Date());

  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <h3>Liczba wyświetleń podopiecznych</h3>
        <select>
          <option value="year">
            <span>
              Rok <BsBriefcase className="text-2xl" />
            </span>
          </option>
          <option value="month">Miesiąc </option>
        </select>
      </div>
    </div>
  );
};

export default Chart;
