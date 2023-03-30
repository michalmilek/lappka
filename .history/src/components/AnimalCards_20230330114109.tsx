import React from "react";
import Button from "./customComponents/Button";

interface Props {
    age
: 
60
breed
: 
"Inny"
color
: 
"Inny"
createdAt
: 
"2023-03-15T12:14:00.150157"
description
: 
"sda"
gender
: 
"Female"
id
: 
"c6dd86d0-e30b-4090-90a8-def6dac048e2"
isSterilized
: 
false
isVisible
: 
false
name
: 
"dsa"
petIdentifier
: 
"fsdsfdsfd"
photos
: 
Array(0)
length
: 
0
[[Prototype]]
: 
Array(0)
profilePhoto
: 
"http://lappka.mobitouch.pl/files/Storage/aa3aae0a-0ac0-4a99-9e01-dd0a459ade55"
type
: 
"OTHER"
weight
: 
21
}

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
