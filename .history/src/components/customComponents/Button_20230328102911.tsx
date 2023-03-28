import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, ...rest }: Props) => {
  return (
    <button
      className="w-full bg-Primary/PR600 text-white rounded-lg"
      {...rest}>
      {text}
    </button>
  );
};

export default Button;
