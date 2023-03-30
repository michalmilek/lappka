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
  Label,
} from "recharts";

import { BsBriefcase } from "react-icons/bs";

const data = [
  {
    name: "Styczeń",
    views: 200,
  },
  {
    name: "Luty",
    views: 600,
  },
  {
    name: "Marzec",
    views: 700,
  },
  {
    name: "Kwiecień",
    views: 600,
  },
  {
    name: "Maj",
    views: 400,
  },
  {
    name: "Czerwiec",
    views: 1100,
  },
  {
    name: "Lipiec",
    views: 1600,
  },
  {
    name: "Sierpień",
    views: 1700,
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
          data={data}
          margin={{ top: 50, right: 30, bottom: 50, left: 30 }}>
          <XAxis dataKey="name" />
          <YAxis>
            <Label
              value="       Tyś"
              position="top"
              offset={30}
              viewBox={{ x: 50 }}
              dx={10}
              dy={0}
            />
          </YAxis>
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
