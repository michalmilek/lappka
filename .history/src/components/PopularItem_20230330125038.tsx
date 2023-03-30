import React from "react";
import { Animal } from "./AnimalCards";
import { ReactComponent as EyeIcon } from "./icons/EyeIcon.svg";

const PopularItem = ({ animal }: { animal: Animal }) => {
  return (
    <div className="flex items-center px-4 gap-10 relative min-w-[400px]">
      <div className="flex items-center gap-1 w-full">
        <img
          src={animal.profilePhoto}
          alt=""
          className="h-7 w-7 rounded-full"
        />
        <div className="flex flex-col">
          <h5>{animal.name}</h5>
          <h6>{animal.type}</h6>
        </div>
      </div>
      <span className="flex items-center gap-6 absolute left-[80%] flex-nowrap justify-start whitespace-nowrap">
        <EyeIcon /> {(Math.round(Math.random() * 4000) / 1000).toFixed(1)} tyś
      </span>
    </div>
  );
};

export default PopularItem;
