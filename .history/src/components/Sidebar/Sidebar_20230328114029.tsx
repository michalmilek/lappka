import React from "react";
import Logo from "./Logo.png";
import { ReactComponent as HomeIcon } from "./icons/Vector.svg";

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
        <li>Wiadomości</li>
        <li>Karty zwierząt</li>
        <li>Wolontariat</li>
      </ul>

      <p className="uppercase text-[12px] text-midGray3 font-semibold">
        Organizacja
      </p>
    </div>
  );
};

export default Sidebar;
