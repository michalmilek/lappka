import React, { forwardRef } from "react";

const FormInput = forwardRef(
  ({ register, type, error, ...inputProps }: any) => {
    return (
      <>
        <label
          htmlFor={type}
          className="capitalize">
          {type}
        </label>
        <input
          type={type}
          {...register({ type })}
          id={type}
          name={type}
          {...inputProps}
        />
        {error && <p>{error.message}</p>}
      </>
    );
  }
);

export default FormInput;
