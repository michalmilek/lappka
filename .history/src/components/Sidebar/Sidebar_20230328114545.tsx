import React from "react";
import Logo from "./Logo.png";
import { ReactComponent as HomeIcon } from "./icons/Vector.svg";
import { ReactComponent as MessageIcon } from "./icons/Messages.svg";
import { ReactComponent as AnimalsCards } from "./icons/AnimalsCards.svg";
import { ReactComponent as HeartIcon } from "./icons/Heart.svg";
import { ReactComponent as EmployeesIcon } from "./icons/Workers.svg";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-11">
      <img
        src={Logo}
        alt="Logo"
      />

      <ul>
        <li>
          <HomeIcon /> Dashboard
        </li>
        <li>
          <MessageIcon /> Wiadomości
        </li>
        <li>
          <AnimalsCards /> Karty zwierząt
        </li>
        <li>
          <HeartIcon /> Wolontariat
        </li>
      </ul>

      <p className="uppercase text-[12px] text-midGray3 font-semibold">
        Organizacja
      </p>
      <ul>
        <li>
          <EmployeesIcon /> Pracownicy
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
