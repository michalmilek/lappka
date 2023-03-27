import React from "react";
import logo from "./color.png";

const Form = () => {
  return (
    <div className="flex min-w-full min-h-full">
      <div className="px-32 py-10 flex flex-col items-start justify-start">
        <img
          src={logo}
          alt="Łappka logo"
        />
      </div>

      <div></div>
    </div>
  );
};

export default Form;
