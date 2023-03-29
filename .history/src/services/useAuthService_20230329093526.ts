import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const useAuthService = (email: string, password: string) => {
  const navigate = useNavigate();
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
};

export default useAuthService;
