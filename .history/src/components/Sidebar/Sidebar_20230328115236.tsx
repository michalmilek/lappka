import React from "react";
import Logo from "./Logo.png";
import { ReactComponent as HomeIcon } from "./icons/Vector.svg";
import { ReactComponent as MessageIcon } from "./icons/Messages.svg";
import { ReactComponent as AnimalsCards } from "./icons/AnimalsCards.svg";
import { ReactComponent as HeartIcon } from "./icons/Heart.svg";
import { ReactComponent as EmployeesIcon } from "./icons/Workers.svg";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-11 px-3 py-1 min-h-screen">
      <img
        src={Logo}
        alt="Logo"
      />

      <ul className="flex flex-col items-start justify-center gap-1">
        <li className="listLink">
          <HomeIcon /> Dashboard
        </li>
        <li className="listLink">
          <MessageIcon /> Wiadomości
        </li>
        <li className="listLink">
          <AnimalsCards /> Karty zwierząt
        </li>
        <li className="listLink">
          <HeartIcon /> Wolontariat
        </li>
      </ul>

      <p className="uppercase text-[12px] text-midGray3 font-semibold">
        Organizacja
      </p>
      <ul>
        <li className="listLink">
          <EmployeesIcon /> Pracownicy
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
