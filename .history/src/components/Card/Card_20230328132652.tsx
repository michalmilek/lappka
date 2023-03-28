import React from "react";
import { ReactComponent as AnimalsCardIcon } from "./icons/AnimalsCardIcon.svg";

const Card = () => {
  return (
    <div className="bg-white flex">
      <AnimalsCardIcon className="p-4 flex justify-center items-center rounded-full h-10 w-10 text-2xl" />
      <div>
        <p className="text-midGray4 text-[12px] font-semibold">
          Karty zwierząt
        </p>
        <span className="text-darkGray2 font-semibold text-3xl tracking-veryTight ">
          235
        </span>
      </div>
    </div>
  );
};

export default Card;
