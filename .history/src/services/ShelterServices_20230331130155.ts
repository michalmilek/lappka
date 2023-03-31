import axios from "axios";
import { refreshAuth } from "./authHeader";
import jwt_decode from "jwt-decode";

const token = localStorage.getItem("accessToken");
const token2 = token?.replace(/["]/g, "");
console.log(token2);

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
  const response = axios
    .get(process.env.REACT_APP_PET_URL + "/shelters/stats", {
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
  const response = axios
    .get(
      process.env.REACT_APP_PET_URL +
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

const getRefreshToken = () => localStorage.getItem("refreshToken");

export const isTokenExpired = (token: any) => {
  const { exp }: { exp: any } = jwt_decode(token);
  const now = Date.now() / 1000;
  console.log("Exp: ", exp, "Now:", now);
  return exp < now;
};

export const refreshAuthToken = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    window.location.href = "/login";
    return;
  }

  try {
    refreshAuth();
  } catch (error) {
    console.error("Failed try to refresh token:", error);
    window.location.href = "/login";
  }
};