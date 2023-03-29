import axios from "axios";
import React from "react";
import { UseFormSetError } from "react-hook-form";
import { Inputs } from "../components/LoginForm";

export const login = (
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
      if (response.data?.accessToken) {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem(
          "refreshToken",
          JSON.stringify(response.data.refreshToken)
        );
        //window.location.reload();
        console.log(response);
      }

      return response.data;
    })
    .catch((error) => {
      console.log(error);
      setError("root", {
        type: "custom",
        message: "Wrong email or password, try again.",
      });
    });
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.reload();
};
