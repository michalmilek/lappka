import React from "react";
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

const AnimalCards = ({ animals }: Animal[]) => {
  return (
    <div className="flex flex-col bg-white">
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
    </div>
  );
};

export default AnimalCards;
