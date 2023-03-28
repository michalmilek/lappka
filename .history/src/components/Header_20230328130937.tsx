import React from "react";
import { ReactComponent as BellIcon } from "./icons/Bell.svg";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-8 py-3">
      <h1 className="font-semibold text-xl -tracking-widest text-darkGray2">
        Dashboard
      </h1>
      <BellIcon />
    </header>
  );
};

export default Header;
