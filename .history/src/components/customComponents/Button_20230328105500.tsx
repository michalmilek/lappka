import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "login" | "register";
  text: string;
  hover?: string;
}

const Button = ({ text, variant, ...rest }: Props) => {
  return (
    <button
      className={`${variant === "login" ? "loginButton" : null}`}
      {...rest}>
      {text}
    </button>
  );
};

export default Button;
