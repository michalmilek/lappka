import React from "react";
import { Animal } from "./AnimalCards";
import { ReactComponent as EyeIcon } from "./icons/EyeIcon.svg";

const PopularItem = ({ animal }: { animal: Animal }) => {
  const numberformatter = (number: number) => {
    if (number > 999 && number < 10000) {
      const newNumber = Math.round(number * 10) / 10;
      return newNumber;
    }
    return number;
  };
  return (
    <div>
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
        <EyeIcon /> {numberformatter(Math.random() * 4000)}
      </span>
    </div>
  );
};

export default PopularItem;
