import React from "react";
import { Animal } from "./AnimalCards";
import PopularItem from "./PopularItem";

const MostPopularAnimals = ({ animals }: { animals: Animal[] }) => {
  return (
    <div className="flex bg-white flex-col min-h-[400px]">
      <h2 className="py-2 pb-3 text-darkGray2 text-lg font-semibold -tracking-wide18em pl-6">
        Najpopularniejsze
      </h2>
      <div className="flex flex-col gap-2">
        {animals?.map((animal) => (
          <PopularItem animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default MostPopularAnimals;
