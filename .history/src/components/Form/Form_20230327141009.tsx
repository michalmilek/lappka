import React from "react";
import logo from "./color.png";

const Form = () => {
  return (
    <div className="flex min-w-full min-h-full">
      <div className="px-32 py-10 flex flex-col items-start justify-start gap-16">
        <img
          src={logo}
          alt="Łappka logo"
        />
        <form>
          <h1>Zaloguj się!</h1>
          <p>Witaj ponownie!</p>
          <label className="flex flex-col">
            E-mail
            <input
              type="email"
              placeholder="Adres email"
              className=" border border-gray-500 rounded-sm"
            />
          </label>
        </form>
      </div>

      <div></div>
    </div>
  );
};

export default Form;
