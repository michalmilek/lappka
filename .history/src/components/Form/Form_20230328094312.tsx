import React from "react";
import { useForm } from "react-hook-form";
import logo from "./color.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import FormInput from "../customComponents/FormInput";

interface Inputs {
  email: string;
  password: string;
}

const Form = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className="flex min-w-full min-h-full">
      <div className="px-32 py-10 flex flex-col items-start justify-start gap-16 w-[50%]">
        <img
          src={logo}
          alt="Łappka logo"
        />
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <h1>Zaloguj się!</h1>
          <p>Witaj ponownie!</p>
          <FormInput
            label="Email"
            error={errors.email?.message}
            {...register("email")}
          />
          {/*           <p>{errors.email?.message}</p> */}
          <label className="flex flex-col">
            Hasło
            <input
              {...register("password")}
              type="password"
              placeholder="Wpisz"
              className=" border border-gray-500 rounded-sm"
            />
          </label>
          <div className="flex justify-between items-center">
            <label htmlFor="RememberMe">
              <input type="checkbox" />
              Pamiętaj mnie
            </label>
            <a href="/">Zapomnialem hasła</a>
          </div>
          <button
            className="w-full flex justify-center items-center"
            type="submit">
            Zaloguj się
          </button>
        </form>
      </div>

      <div className="w-[50%]"></div>
    </div>
  );
};

export default Form;
