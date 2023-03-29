import axios from "axios";
import React from "react";
import { UseFormSetError } from "react-hook-form";
import { Inputs } from "../components/LoginForm";

const authService = (
  email: string,
  password: string,
  setError: UseFormSetError<Inputs>
) => {
  axios
    .post(process.env.REACT_APP_API_URL + "/Auth/loginWeb", {
      password: password,
      email: email,
    })
    .then(function (response) {
      console.log(response);
      //navigate("/dashboard");
    })
    .catch((error) => {
      console.log(error);
      setError("root", {
        type: "custom",
        message: "Wrong email or password, try again.",
      });
    });
};

export default authService;
