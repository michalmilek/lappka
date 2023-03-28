import React from "react";
import LoginForm from "../LoginForm";

import logo from "./color.png";
import bgImage from "./BGImage2.png";

const Form = () => {
  return (
    <div className="flex min-w-full min-h-full">
      <div className="px-32 py-10 flex flex-col items-start justify-start gap-36 w-[50%]">
        <img
          src={logo}
          alt="Łappka logo"
        />
        <LoginForm />
      </div>

      <div className="w-[50%] h-full bg-bgGreen"></div>
    </div>
  );
};

export default Form;
