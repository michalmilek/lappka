import { UseFormSetError } from "react-hook-form";
import { Inputs } from "../components/LoginForm";
import { AuthInstance } from "./axiosInstances";

const accessToken = JSON.parse(localStorage.getItem("accessToken") || '""');
const accessTokenWithoutString = accessToken.replace(/"/g, "");
const refreshToken = JSON.parse(localStorage.getItem("refreshToken") || '""');
const refreshTokenWithoutString = refreshToken.replace(/"/g, "");

export const refreshAuth = () => {
  if (!refreshToken || !accessToken) {
    window.location.href = "/";
    return;
  }

  if (accessToken && refreshToken) {
    AuthInstance.post("/Auth/useToken", {
      accessToken: accessTokenWithoutString,
      refreshToken: refreshTokenWithoutString,
    })
      .then((res) => {
        localStorage.setItem(
          "accessToken",
          JSON.stringify(res.data.accessToken)
        );
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }
};

export const login = (
  email: string,
  password: string,
  setError: UseFormSetError<Inputs>
) => {
  AuthInstance.post("/Auth/loginWeb", {
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
        window.location.href = "/dashboard";
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
  AuthInstance.post("/Auth/revokeToken", {
    refreshToken: refreshTokenWithoutString,
  })
    .then((res) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.reload();
      return res;
    })
    .catch((error) => console.log(error));

  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.reload();
};
