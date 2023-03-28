import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  text: string;
}

const Button = ({ text, fullWidth, ...rest }: Props) => {
  return (
    <button
      className={`w-full bg-Primary/PR600 ${
        fullWidth ? "w-full" : null
      } text-lightGray5 font-medium rounded-lg py-2 px-2`}
      {...rest}>
      {text}
    </button>
  );
};

export default Button;
