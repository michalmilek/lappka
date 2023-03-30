import React from "react";
import { Animal } from "./AnimalCards";

const AnimalsList = ({ animals }: { animals: Animal[] }) => {
  return (
    <div className="bg-white">
      <h3 className="text-darkGray2 font-semibold tracking-veryVeryTight">
        Karty zwierząt
      </h3>
      <img
        src=""
        alt=""
      />
    </div>
  );
};

export default AnimalsList;
