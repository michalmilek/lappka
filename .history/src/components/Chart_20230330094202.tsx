import React, { useState } from "react";
import DatePicker from "react-date-picker";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { BsBriefcase } from "react-icons/bs";

const data = [
  {
    name: "Styczeń",
    views: 2,
  },
  {
    name: "Luty",
    uv: 6,
  },
  {
    name: "Marzec",
    uv: 7,
  },
  {
    name: "Kwiecień",
    uv: 6,
  },
  {
    name: "Maj",
    uv: 4,
  },
  {
    name: "Czerwiec",
    uv: 11,
  },
  {
    name: "Lipiec",
    uv: 16,
  },
  {
    name: "Sierpień",
    uv: 17,
  },
  {
    name: "Wrzesień",
    uv: 0,
  },
  {
    name: "Październik",
    uv: 0,
  },
  {
    name: "Listopad",
    uv: 0,
  },
  {
    name: "Grudzień",
    uv: 0,
  },
];

const Chart = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const [activeMonth, setActiveMonth] = useState<null | number>(null);

  return (
    <div className="w-full">
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
      <ResponsiveContainer
        width="100%"
        height={100}>
        <BarChart
          width={150}
          height={40}
          data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="views"
            /*  onClick={this.handleClick} */
          >
            {data.map((entry, index) => (
              <Cell
                cursor="pointer"
                fill="#6e7378"
                /* fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
                key={`cell-${index}`} */
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
