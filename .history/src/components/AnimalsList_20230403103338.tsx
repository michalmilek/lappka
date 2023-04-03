import React from "react";
import { Animal } from "./AnimalCards";
import Table from "./Table";

const AnimalsList = ({ numberOfPages }: { numberOfPages: number }) => {
  return (
    <div className="bg-white px-3 py-3 mx-6 mt-10 rounded-lg shadow-lg">
      <h3 className="text-darkGray2 font-semibold tracking-veryVeryTight">
        Karty zwierząt
      </h3>
      <Table numberOfPages={numberOfPages} />
    </div>
  );
};

export default AnimalsList;
