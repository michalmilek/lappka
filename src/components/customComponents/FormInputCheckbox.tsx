import { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const FormInputCheckbox = forwardRef<HTMLInputElement, Props>(
  (props: Props, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className="text-Primary/PR500 ring-0 focus:ring-0 rounded-[4px]"
      />
    );
  }
);

export default FormInputCheckbox;
