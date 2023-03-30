import React from "react";
import { Animal } from "./AnimalCards";

const AnimalCard = ({ animal }: { animal: Animal }) => {
  return (
    <div className="flex flex-col shadow-md rounded-3xl max-w-[320px] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-200">
      <img
        className="w-full h-[250px] object-cover"
        src={animal.profilePhoto}
        alt=""
      />
      <div className="flex w-full px-4 py-3 justify-between items-end">
        <div className="flex flex-col">
          <h4 className="font-semibold tracking-veryVeryTight text-darkGray2">
            {animal.name}
          </h4>
          <p className="text-midGray2 tracking-veryTight text-sm ">
            {animal.type}
          </p>
        </div>
        <span className="text-[12px] text-midGray2">
          {new Date(animal?.createdAt).toLocaleDateString("pl-PL")}
        </span>
      </div>
    </div>
  );
};

export default AnimalCard;
