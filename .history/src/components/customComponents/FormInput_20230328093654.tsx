import React, { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const FormInput = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { label, ...rest } = props;

  return (
    <div>
      <label>{label}</label>
      <input
        {...rest}
        ref={ref}
      />
    </div>
  );
});

export default FormInput;
