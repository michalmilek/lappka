import React from "react";
import LoginForm from "../LoginForm";

import logo from "./color.png";
import bgImage from "./BGImage2.png";
import Button from "../customComponents/Button";

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

      <div className="w-[50%] min-h-[100vh] bg-bgGreen flex justify-center items-center relative">
        <div className="flex gap-3 absolute top-[4%] left-[60%]">
          <Button
            variant="register"
            text="Zarejestruj się"
          />{" "}
          <button className="text-midGray2 text-5xl">&times;</button>
        </div>
        <img
          src={bgImage}
          alt="Woman sitting on chair - background"
        />
      </div>
    </div>
  );
};

export default Form;
