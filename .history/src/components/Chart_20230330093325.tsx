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
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Luty",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Marzec",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Kwiecień",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Maj",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Czerwiec",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Lipiec",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sierpień",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Wrzesień",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Październik",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Listopad",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Grudzień",
    uv: 3490,
    pv: 4300,
    amt: 2100,
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
          <Bar
            dataKey="uv"
            onClick={this.handleClick}>
            {data.map((entry, index) => (
              <Cell
                cursor="pointer"
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
