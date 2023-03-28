import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, ...rest }: Props) => {
  return <button {...rest}>{text}</button>;
};

export default Button;
