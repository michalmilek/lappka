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
      className="flex min-w-[360px] md:min-w-[420px] flex-col items-start justify-between p-8 border-2 rounded-lg border-lightGray4 bg-white whitespace-nowrap"
      onSubmit={handleSubmit((data) => console.log(data))}>
      <h1 className="text-3xl font-semibold color text-primaryGreen2">
        Zaloguj się!
      </h1>
      <p className="text-midGray2 text-sm tracking-veryTight mt-2 mb-10">
        Witaj ponownie!
      </p>
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
      <div className="flex justify-between items-center mb-8 w-full">
        <label
          className="flex items-center gap-2 text-darkGray2 text-sm tracking-veryTight"
          htmlFor="RememberMe">
          <input
            className="text-Primary/PR500 ring-0 focus:ring-0 rounded-[4px]"
            type="checkbox"
          />
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
