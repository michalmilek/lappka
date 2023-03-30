import axios from "axios";
import { UseFormSetError } from "react-hook-form";
import { Inputs } from "../components/LoginForm";

const refreshToken = JSON.parse(localStorage.getItem("refreshToken") || '""');
const refreshTokenWithoutString = refreshToken.replace(/"/g, "");

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
  axios
    .post(process.env.REACT_APP_API_URL + "/Auth/revokeToken", {
      refreshToken: refreshTokenWithoutString,
    })
    .then((res) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.reload();
      return res;
    })
    .catch((error) => console.log(error));
};
