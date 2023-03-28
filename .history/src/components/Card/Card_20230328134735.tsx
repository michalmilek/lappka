import React from "react";
import { ReactComponent as AnimalsCardIcon } from "./icons/AnimalsCardIcon.svg";

interface Props {
  icon: JSX.Element;
  title: string;
  amount: number;
}

const Card = ({ icon, title, amount }: Props) => {
  return (
    <div className="bg-white flex gap-3 min-w-[272px] min-h-[82px] items-start pl-5 py-4 rounded-lg shadow-md">
      {icon}
      <div>
        <p className="text-midGray4 text-[12px] font-semibold">{title}</p>
        <span className="text-darkGray2 font-semibold text-3xl tracking-veryTight ">
          {amount}
        </span>
      </div>
    </div>
  );
};

export default Card;
