import React from "react";
import FormInput from "./customComponents/FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface Inputs {
  email: string;
  password: string;
}

const LoginForm = () => {
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
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });
  return (
    <form
      className="border-2 rounded-lg border-lightGray4 bg-white"
      onSubmit={handleSubmit((data) => console.log(data))}>
      <h1>Zaloguj się!</h1>
      <p>Witaj ponownie!</p>
      <FormInput
        label="Email"
        placeholder="Adres email"
        error={errors.email?.message}
        {...register("email")}
      />
      <FormInput
        label="Hasło"
        placeholder="Wpisz"
        error={errors.password?.message}
        {...register("password")}
      />
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
  );
};

export default LoginForm;
