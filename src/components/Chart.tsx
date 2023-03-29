import React, { useState } from "react";
import DatePicker from "react-date-picker";

const Chart = () => {
  const [dateValue, setDateValue] = useState(new Date());

  return (
    <div>
      <div>
        <h3>Liczba wyświetleń podopiecznych</h3>
        <DatePicker
          onChange={setDateValue}
          value={dateValue}
          disableCalendar={true}
        />
      </div>
    </div>
  );
};

export default Chart;
