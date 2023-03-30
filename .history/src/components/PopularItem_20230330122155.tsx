import React from "react";
import { Animal } from "./AnimalCards";

const PopularItem = ({ animal }: { animal: Animal }) => {
  return (
    <div>
      <img
        src={animal.profilePhoto}
        alt=""
        className="h-7 w-7 rounded-full"
      />
    </div>
  );
};

export default PopularItem;
