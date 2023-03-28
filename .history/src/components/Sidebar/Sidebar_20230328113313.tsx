import React from "react";
import Logo from "./Logo.png";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start justify-start">
      <img
        src={Logo}
        alt="Logo"
      />

      <ul>
        <li>Dashboard</li>
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
