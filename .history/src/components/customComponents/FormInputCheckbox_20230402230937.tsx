import { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const FormInput = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { label, ...rest } = props;

  return (
    <input
      {...rest}
      ref={ref}
      className="text-Primary/PR500 ring-0 focus:ring-0 rounded-[4px]"
    />
  );
});

export default FormInput;
