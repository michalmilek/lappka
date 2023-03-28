import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "login" | "register";
  text: string;
  hover?: boolean;
}

const Button = ({ text, variant, hover, ...rest }: Props) => {
  return (
    <button
      className={`${variant === "login" ? "loginButton" : null} ${
        hover ? "hoverEffect" : null
      }`}
      {...rest}>
      {text}
    </button>
  );
};

export default Button;
