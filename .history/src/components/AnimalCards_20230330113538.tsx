import React from "react";
import Button from "./customComponents/Button";

const AnimalCards = () => {
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
