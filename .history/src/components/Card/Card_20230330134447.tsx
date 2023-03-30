import React from "react";

interface Props {
  icon: JSX.Element;
  title: string;
  amount: number;
  variant?: "big";
}

const Card = ({ icon, title, amount, variant }: Props) => {
  return (
    <div
      className={`bg-white flex gap-3 min-h-[82px] items-start pl-5 py-4 rounded-lg shadow-md ${
        variant === "big" ? "min-w-[500px]" : "min-w-[272px]"
      }`}>
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
