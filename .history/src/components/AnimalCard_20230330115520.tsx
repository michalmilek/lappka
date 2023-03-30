import React from "react";
import { Animal } from "./AnimalCards";

const AnimalCard = ({ animal }: { animal: Animal }) => {
  return (
    <div className="flex flex-col">
      <img
        className="w-[350px] h-[250px]"
        src={animal.profilePhoto}
        alt=""
      />
      <div className="flex">
        <div className="flex flex-col">
          <h4>Ninka</h4>
          <p>Kot</p>
        </div>
        <span>06.08.2022</span>
      </div>
    </div>
  );
};

export default AnimalCard;
