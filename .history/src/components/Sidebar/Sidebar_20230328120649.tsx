import React from "react";
import Logo from "./Logo.png";
import { ReactComponent as HomeIcon } from "./icons/Vector.svg";
import { ReactComponent as MessageIcon } from "./icons/Messages.svg";
import { ReactComponent as AnimalsCards } from "./icons/AnimalsCards.svg";
import { ReactComponent as HeartIcon } from "./icons/Heart.svg";
import { ReactComponent as EmployeesIcon } from "./icons/Workers.svg";

const Sidebar = () => {
  return (
    <div className="px-3 py-5 min-h-screen flex flex-col min-w-[200px]">
      <div className="flex flex-col items-start justify-start gap-11">
        <img
          src={Logo}
          alt="Logo"
        />

        <ul className="flex flex-col items-start justify-center gap-1 w-full">
          <li className="listLink bg-bgGreen !text-Primary/PR700">
            <HomeIcon /> Dashboard
          </li>
          <li className="listLink relative">
            <MessageIcon /> Wiadomości
            <span className="absolute text-sm right-2 bg-orange flex justify-center items-center top-[50%] translate-y-[-50%] rounded-xl p-[2px] px-[6px] text-white">
              56
            </span>
          </li>
          <li className="listLink">
            <AnimalsCards /> Karty zwierząt
          </li>
          <li className="listLink">
            <HeartIcon /> Wolontariat
          </li>
        </ul>

        <div className="flex flex-col items-start justify-center gap-1">
          <p className="uppercase text-[12px] text-midGray3 font-semibold mb-0">
            Organizacja
          </p>
          <ul className="w-full">
            <li className="listLink">
              <EmployeesIcon /> Pracownicy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
