import React from "react";
import { ReactComponent as AnimalsCardIcon } from "./icons/AnimalsCardIcon.svg";

const Card = () => {
  return (
    <div className="bg-white flex gap-3 min-w-[272px] min-h-[82px] items-start pl-5 py-4 rounded-md">
      <AnimalsCardIcon className="p-2 flex justify-center items-center h-10 w-10 rounded-full bg-bgGreen" />
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
