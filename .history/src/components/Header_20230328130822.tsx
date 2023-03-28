import React from "react";
import { ReactComponent as BellIcon } from "./icons/Bell.svg";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-16 py-3">
      <h1>Dashboard</h1>
      <BellIcon />
    </header>
  );
};

export default Header;
