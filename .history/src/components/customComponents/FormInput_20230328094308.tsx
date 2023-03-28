import React, { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
}

const FormInput = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { label, error, ...rest } = props;

  return (
    <div>
      <label>{label}</label>
      <input
        {...rest}
        ref={ref}
      />
      <p className="text-red-500">{error}</p>
    </div>
  );
});

export default FormInput;
