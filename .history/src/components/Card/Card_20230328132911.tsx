import React from "react";
import { ReactComponent as AnimalsCardIcon } from "./icons/AnimalsCardIcon.svg";

const Card = () => {
  return (
    <div className="bg-white flex pt-4 pb-6 px-9">
      <AnimalsCardIcon className="p-3 flex justify-center items-center h-12 w-12 rounded-full bg-bgGreen" />
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
