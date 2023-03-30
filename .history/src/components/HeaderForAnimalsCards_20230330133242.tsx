import React from "react";
import Button from "./customComponents/Button";
import { ReactComponent as BellIcon } from "./icons/Bell.svg";

const HeaderForAnimalsCards = () => {
  return (
    <header className="w-full flex justify-between items-center px-8 py-3 shadow-lg bg-white">
      <h1 className="font-semibold text-xl -tracking-widest text-darkGray2">
        Dashboard
      </h1>
      <div className="flex gap-7 justify-center items-center min-w-[200px]">
        <BellIcon />
        <Button
          variant="login"
          text={`+Nowa karta`}
        />
      </div>
    </header>
  );
};

export default HeaderForAnimalsCards;
