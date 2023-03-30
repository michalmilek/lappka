import React from "react";
import { Animal } from "./AnimalCards";

const AnimalCard = ({ animal }: { animal: Animal }) => {
  return (
    <div className="flex flex-col shadow-md rounded-3xl max-w-[320px] overflow-hidden cursor-pointer hover:scale-110 transition-all duration-200">
      <img
        className="w-full h-[250px] object-cover"
        src={animal.profilePhoto}
        alt=""
      />
      <div className="flex w-full px-4 py-3 justify-between items-end">
        <div className="flex flex-col">
          <h4 className="font-semibold tracking-veryVeryTight text-darkGray2">
            Ninka
          </h4>
          <p className="text-midGray2 tracking-veryTight text-sm ">Kot</p>
        </div>
        <span className="text-[12px] text-midGray2">06.08.2022</span>
      </div>
    </div>
  );
};

export default AnimalCard;
