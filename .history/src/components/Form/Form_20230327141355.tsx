import React from "react";
import logo from "./color.png";

const Form = () => {
  return (
    <div className="flex min-w-full min-h-full">
      <div className="px-32 py-10 flex flex-col items-start justify-start gap-16 w-[50%]">
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
          <label className="flex flex-col">
            Hasło
            <input
              type="email"
              placeholder="Adres email"
              className=" border border-gray-500 rounded-sm"
            />
          </label>
          <div className="flex justify-between items-center">
            <label htmlFor="RememberMe">
              <input type="checkbox" />
              Pamiętaj mnie
            </label>
            <a href="/">Zapomnialem hasła</a>
          </div>
          <button
            className="w-full flex justify-center items-center"
            type="submit">
            Zaloguj się
          </button>
        </form>
      </div>

      <div className="w-[50%]"></div>
    </div>
  );
};

export default Form;
