import React from "react";

const FormInput = ({ register, type, error, ...inputProps }: any) => {
  return (
    <>
      <label
        htmlFor={type}
        className="capitalize">
        {type}
      </label>
      <input
        type={type}
        ref={register}
        id={type}
        name={type}
        {...inputProps}
      />
      {error && <p>{error.message}</p>}
    </>
  );
};

export default FormInput;
