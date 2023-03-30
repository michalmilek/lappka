import React from "react";
import AnimalCard from "./AnimalCard";
import Button from "./customComponents/Button";

export interface Animal {
  id: string;
  petIdentifier: string;
  name: string;
  type: string;
  gender: string;
  breed: string;
  color: string;
  weight: number;
  profilePhoto: string;
  photos: string[];
  age: number;
  createdAt: string;
  isSterilized: true;
  isVisible: true;
  description: string;
}

const AnimalCards = ({ animals }: { animals: Animal[] }) => {
  return (
    <div className="flex flex-col bg-white gap-2 pt-2 py-4 px-6 shadow-lg rounded-lg">
      <div className="flex items-center justify-between py-2 border-b">
        <h3 className="whitespace-nowrap text-darkGray2 tracking-veryVeryTight font-semibold">
          Najnowsze karty zwierząt
        </h3>
        <div className="w-[120px]">
          <Button
            variant="register"
            text="Wszystkie"
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-28">
        {animals.map((animal: Animal) => (
          <AnimalCard animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalCards;
