import React, { useRef, useState } from "react";
import FormInput from "./customComponents/FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Button from "./customComponents/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthService from "../services/authService";
import authService from "../services/authService";

export interface Inputs {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [checkBoxInput, setCheckBoxInput] = useState(true);
  const checkBoxRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
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
    setError,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  /* const SignIn = (password: string, email: string) => {
    axios
      .post(process.env.REACT_APP_API_URL + "/Auth/loginWeb", {
        password: password,
        email: email,
      })
      .then(function (response) {
        console.log(response);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setError("root", {
          type: "custom",
          message: "Wrong email or password, try again.",
        });
      });
  }; */
  return (
    <form
      className="flex min-w-[360px] md:min-w-[420px] flex-col items-start justify-between p-8 border-2 rounded-lg border-lightGray4 bg-white whitespace-nowrap"
      onSubmit={handleSubmit((data) =>
        authService(data.email, data.password, setError)
      )}>
      <h1 className="text-3xl font-semibold color text-Primary/PR800">
        Zaloguj się!
      </h1>
      <p className="text-midGray2 text-sm tracking-veryTight mt-2 mb-10">
        Witaj ponownie!
      </p>
      <p className="flex justify-center w-full text-sm text-red-500">
        {errors.root?.message}
      </p>
      <FormInput
        label="Email"
        type={"text"}
        placeholder="Adres email"
        error={errors.email?.message}
        {...register("email")}
      />
      <FormInput
        label="Hasło"
        type="password"
        placeholder="Wpisz"
        error={errors.password?.message}
        {...register("password")}
      />
      <div className="flex justify-between items-center mb-8 w-full">
        <label
          onClick={() => setCheckBoxInput((prev) => !prev)}
          className="flex select-none items-center gap-2 text-darkGray2 text-sm tracking-veryTight"
          htmlFor="RememberMe">
          <input
            ref={checkBoxRef}
            checked={checkBoxInput}
            readOnly
            className="text-Primary/PR500 ring-0 focus:ring-0 rounded-[4px]"
            type="checkbox"
          />
          Pamiętaj mnie
        </label>
        <a
          className="text-Primary/PR600 text-sm tracking-veryTight hoverEffect"
          href="/">
          Zapomnialem hasła
        </a>
      </div>
      <Button
        variant="login"
        text="Zaloguj się"
        hover
      />
    </form>
  );
};

export default LoginForm;
