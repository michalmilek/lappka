import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, ...rest }: Props) => {
  return (
    <button
      className="w-full bg-Primary/PR600 text-lightGray5 font-medium rounded-lg py-2 hover:scale-105 transition-all duration-200"
      {...rest}>
      {text}
    </button>
  );
};

export default Button;
