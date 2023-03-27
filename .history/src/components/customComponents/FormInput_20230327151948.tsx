import React from "react";

const FormInput = ({ register, type }: any) => {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input
        type={type}
        ref={register}
        id={type}
        name={type}
      />
    </>
  );
};

export default FormInput;
