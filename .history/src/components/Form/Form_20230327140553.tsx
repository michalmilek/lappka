import React from "react";
import logo from "./color.png";

const Form = () => {
  return (
    <form className="flex min-w-full ">
      <div className="px-32">
        <img
          src={logo}
          alt="Łappka logo"
        />
      </div>
      <div></div>
    </form>
  );
};

export default Form;
