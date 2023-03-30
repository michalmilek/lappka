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
    views: 6,
  },
  {
    name: "Marzec",
    views: 7,
  },
  {
    name: "Kwiecień",
    views: 6,
  },
  {
    name: "Maj",
    views: 4,
  },
  {
    name: "Czerwiec",
    views: 11,
  },
  {
    name: "Lipiec",
    views: 16,
  },
  {
    name: "Sierpień",
    views: 17,
  },
  {
    name: "Wrzesień",
    views: 0,
  },
  {
    name: "Październik",
    views: 0,
  },
  {
    name: "Listopad",
    views: 0,
  },
  {
    name: "Grudzień",
    views: 0,
  },
];

const Chart = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const [activeMonth, setActiveMonth] = useState<null | number>(null);

  return (
    <div className="max-w-[850px]">
      <div className="flex items-center justify-between w-full">
        <h3 className="whitespace-nowrap text-darkGray2 tracking-veryVeryTight font-semibold">
          Liczba wyświetleń podopiecznych
        </h3>
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
        height={500}>
        <BarChart
          width={150}
          height={150}
          data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid
            vertical={false}
            strokeDasharray="4 4"
          />
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
