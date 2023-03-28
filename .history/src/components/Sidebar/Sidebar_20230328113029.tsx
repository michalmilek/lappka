import React from "react";
import Logo from "./Logo.png";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start justify-start">
      <img
        src={Logo}
        alt="Logo"
      />
    </div>
  );
};

export default Sidebar;
