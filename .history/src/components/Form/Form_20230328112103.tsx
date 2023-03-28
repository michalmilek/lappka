import React from "react";
import LoginForm from "../LoginForm";

import logo from "./color.png";
import bgImage from "./BGImage2.png";
import Button from "../customComponents/Button";

const Form = () => {
  return (
    <div className="flex min-w-full min-h-full">
      <div className="pr-10 pl-56 py-10 flex flex-col items-start justify-start gap-36 w-[50%]">
        <img
          src={logo}
          alt="Łappka logo"
          className="mb"
        />
        <LoginForm />
      </div>

      <div className="w-[50%] min-h-[100vh] bg-bgGreen flex justify-center items-center relative">
        <div className="flex gap-3 absolute top-[4%] left-[60%] items-center justify-center">
          <Button
            variant="register"
            text="Zarejestruj się"
            hover
          />{" "}
          <button className="text-midGray2 text-4xl transition-all hover:scale-125 active:scale-90">
            &times;
          </button>
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
