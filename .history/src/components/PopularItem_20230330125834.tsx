import React from "react";
import { Animal } from "./AnimalCards";
import { ReactComponent as EyeIcon } from "./icons/EyeIcon.svg";

const PopularItem = ({ animal }: { animal: Animal }) => {
  return (
    <div className="flex items-center px-4 gap-10 relative min-w-[400px] pb-2 border-b cursor-pointer hover:bg-blue-100 transition-all">
      <div className="flex items-center gap-4 w-full">
        <img
          src={animal.profilePhoto}
          alt=""
          className="h-11 w-11 rounded-full"
        />
        <div className="flex flex-col justify-between items-start gap-2">
          <h5 className="text-sm text-darkGray2 tracking-veryTight">
            {animal.name}
          </h5>
          <h6 className="text-[12px] text-midGray3">{animal.type}</h6>
        </div>
      </div>
      <span className="flex items-center gap-3 absolute left-[70%] flex-nowrap justify-start whitespace-nowrap text-darkGray2 text-sm font-semibold tracking-veryTight">
        <EyeIcon /> {(Math.round(Math.random() * 4000) / 1000).toFixed(1)} tyś
      </span>
    </div>
  );
};

export default PopularItem;
