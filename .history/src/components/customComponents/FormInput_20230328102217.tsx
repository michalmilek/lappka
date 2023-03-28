import React, { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
}

const FormInput = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { label, error, ...rest } = props;

  return (
    <div className="flex flex-col gap-1 items-start justify-center mb-4 w-full">
      <label className="text-darkGray2 text-[13px] font-medium">{label}</label>
      <input
        {...rest}
        ref={ref}
        className="w-full border border-lightGray1 rounded-md py-2 px-3 placeholder:text-midGray4 tracking-veryTight text-sm"
      />
      <p className="text-red-500 text-sm pl-2">{error}</p>
    </div>
  );
});

export default FormInput;
