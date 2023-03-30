import React from "react";
import Button from "./customComponents/Button";

const AnimalCards = () => {
  return (
    <div>
      <div>
        <h3 className="whitespace-nowrap text-darkGray2 tracking-veryVeryTight font-semibold">
          Liczba wyświetleń podopiecznych
        </h3>
        <Button
          variant="register"
          text="Wszystkie"
        />
      </div>
    </div>
  );
};

export default AnimalCards;
