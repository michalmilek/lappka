import axios from "axios";
import { refreshAuth } from "./authHeader";
import jwt_decode from "jwt-decode";
import { PetInstance } from "./axiosInstances";

const token = localStorage.getItem("accessToken");
const token2 = token?.replace(/["]/g, "");

/* axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
   const { config, response } = error;
   console.log("ERROR:", response.status);
   if (response) {
     if (response.status === 401) {
       try {
         refreshAuth();
         const delayRetryRequest = new Promise<void>((resolve) => {
           setTimeout(() => {
             resolve();
           }, 1000);
         });
         return delayRetryRequest.then(() => axios(config));
       } catch (error) {
         return Promise.reject(error);
       }
     }
   }

    return Promise.reject(error);
  }
); */

export const getShelterStats = () => {
  const response = PetInstance.get("/shelters/stats", {
    headers: {
      Authorization: `Bearer ${token2}`,
      accept: "text/json",
    },
  })
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
    });

  return response;
};
export const getShelterCards = (number: number) => {
  const response = PetInstance.get(
    `/shelters/cards?pageNumber=${number ? number : 1}`,
    {
      headers: {
        Authorization: `Bearer ${token2}`,
        accept: "text/json",
      },
    }
  )
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
    });

  return response;
};

/* axios.interceptors.response.use(null, function (error) {
  // obsługa błędów
  if (error.response.status === 401) {
    // wykonywanie refetch
    const originalRequest = error.config;
    originalRequest._retry = true; // dodanie flagi, żeby uniknąć nieskończonej pętli
    return axios(originalRequest)
      .then((response) => {
        // przetwarzanie odpowiedzi
        return response;
      })
      .catch((error) => {
        // obsługa błędów refetcha
        return Promise.reject(error);
      });
  }
  return Promise.reject(error);
}); */

const getRefreshToken = () => {
  const refreshToken = localStorage.getItem("refreshToken");
  console.log(refreshToken);
  return refreshToken;
};

export const isTokenExpired = (token: any) => {
  const { exp }: { exp: number } = jwt_decode(token);
  const now = Date.now() / 1000;
  console.log("Exp: ", exp, "Now:", now);
  return exp < now;
};

export const refreshAuthToken = async () => {
  const refreshToken = getRefreshToken();
  const accessToken = localStorage.getItem("accessToken");
  const isExpired = isTokenExpired(accessToken);
  console.log(isExpired);

  if (!refreshToken) {
    window.location.href = "/";
    return;
  }

  if (isExpired) {
    try {
      refreshAuth();
      console.log(refreshAuth());
    } catch (error) {
      console.error("Failed try to refresh token:", error);
      window.location.href = "/";
    }
  }
};