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
    views: 1500,
  },
  {
    name: "Luty",
    views: 5500,
  },
  {
    name: "Marzec",
    views: 7000,
  },
  {
    name: "Kwiecień",
    views: 5500,
  },
  {
    name: "Maj",
    views: 3500,
  },
  {
    name: "Czerwiec",
    views: 11000,
  },
  {
    name: "Lipiec",
    views: 15300,
  },
  {
    name: "Sierpień",
    views: 16200,
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

  const formatYAxis = (tickItem: number) => {
    if (tickItem === 0) return tickItem.toString();
    const newItem = tickItem.toString();
    const newItem2 = newItem.substring(0, newItem.length - 3);
    return newItem2;
  };

  return (
    <div className="xl:w-[850px]">
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
          width={500}
          height={150}
          data={data}
          margin={{ top: 50, right: 30, bottom: 50, left: 30 }}>
          <XAxis dataKey="name" />
          <YAxis
            domain={[0, 20000]}
            tickFormatter={formatYAxis}>
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
