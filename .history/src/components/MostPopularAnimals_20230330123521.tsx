import React from "react";
import { Animal } from "./AnimalCards";
import PopularItem from "./PopularItem";

const MostPopularAnimals = ({ animals }: { animals: Animal[] }) => {
  const numberformatter = (number: number) => {
    if (number > 999 && number < 10000) {
      const newNumber = Math.round(number * 10) / 10;
      return number;
    }
  };

  return (
    <div className="flex">
      <h2 className="py-2 pb-3 text-darkGray2 text-lg font-semibold -tracking-wide18em pl-6">
        Najpopularniejsze
      </h2>
      <div>
        {animals?.map((animal) => (
          <PopularItem animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default MostPopularAnimals;
