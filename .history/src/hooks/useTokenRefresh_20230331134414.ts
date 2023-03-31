import { useEffect, useState } from "react";
import { refreshAuthToken } from "../services/ShelterServices";

/* interface TokenData {
  accessToken: string;
  refreshToken: string;
} */

export const useTokenRefresh = () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const interval = setInterval(() => {
      if (accessToken && refreshToken) {
        refreshAuthToken();
        console.log("test");
      }
    }, 20000); // 5 minutes

    /* return () => clearInterval(interval); */
  }, [accessToken, refreshToken]);

  return [accessToken, refreshToken];
};
