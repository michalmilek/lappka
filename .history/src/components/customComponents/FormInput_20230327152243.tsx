import React from "react";

const FormInput = ({ register, type, errors, ...inputProps }: any) => {
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
      {errors.email && <p>{errors.message}</p>}
    </>
  );
};

export default FormInput;
