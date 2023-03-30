import React from "react";
import { Animal } from "./AnimalCards";
import { ReactComponent as EyeIcon } from "./icons/EyeIcon.svg";

const PopularItem = ({ animal }: { animal: Animal }) => {
  return (
    <div className="flex">
      <img
        src={animal.profilePhoto}
        alt=""
        className="h-7 w-7 rounded-full"
      />
      <div className="flex flex-col">
        <h5>{animal.name}</h5>
        <h6>{animal.type}</h6>
      </div>
      <span className="flex items-center gap-3">
        <EyeIcon /> {(Math.round(Math.random() * 4000) / 1000).toFixed(1)} tyś
      </span>
    </div>
  );
};

export default PopularItem;
