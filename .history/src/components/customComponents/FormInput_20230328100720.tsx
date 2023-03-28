import React, { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
}

const FormInput = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { label, error, ...rest } = props;

  return (
    <div className="flex flex-col gap-1 items-start justify-center mb-4">
      <label>{label}</label>
      <input
        {...rest}
        ref={ref}
        className="w-full"
      />
      <p className="text-red-500">{error}</p>
    </div>
  );
});

export default FormInput;
