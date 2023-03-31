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

const REFRESH_ENDPOINT = "/api/token/refresh";
const LOGIN_ENDPOINT = "/api/login";

// Download accessToken from localStorage
const getAccessToken = () => localStorage.getItem("accessToken");
const setAccessToken = (token: any) => localStorage.setItem("authToken", token);
const removeAccessToken = () => localStorage.removeItem("accessToken");

// Download refreshToken from localStorage
const getRefreshToken = () => localStorage.getItem("refreshToken");
const setRefreshToken = (token: any) =>
  localStorage.setItem("refreshToken", token);
const removeRefreshToken = () => localStorage.removeItem("refreshToken");

// Sprawdzenie, czy token nie jest już wygasły
const isTokenExpired = (token) => {
  const { exp }: { exp: any } = jwt_decode(token);
  const now = Date.now() / 1000;
  console.log("Exp: ", exp, "Now:", now);
  return exp < now;
};

// Funkcja do odświeżania tokena
const refreshAuthToken = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    // Brak Refresh Tokena - przekierowanie do strony logowania
    window.location.href = "/login";
    return;
  }

  try {
    // Wywołanie endpointa do odświeżania tokena
    const response = await axios.post(REFRESH_ENDPOINT, {
      refresh_token: refreshToken,
    });
    const newToken = response.data.token;
    const newRefreshToken = response.data.refresh_token;

    // Aktualizacja tokena i Refresh Tokena w localStorage
    setAuthToken(newToken);
    setRefreshToken(newRefreshToken);
  } catch (error) {
    console.error("Nie udało się odświeżyć tokenu", error);
    // Przekierowanie do strony logowania w przypadku niepowodzenia
    window.location.href = "/login";
  }
};

// Funkcja do logowania
const login = async (email, password) => {
  try {
    // Wywołanie endpointa do logowania
    const response = await axios.post(LOGIN_ENDPOINT, { email, password });
    const token = response.data.token;
    const refreshToken = response.data.refresh_token;

    // Zapisanie tokena i Refresh Tokena w localStorage
    setAuthToken(token);
    setRefreshToken(refreshToken);
  } catch (error) {
    console.error("Nie udało się zalogować", error);
  }
};

// Sprawdzenie stanu autoryzacji przy starcie aplikacji
const checkAuthStatus = () => {
  const authToken = getAuthToken();
  if (!authToken || isTokenExpired(authToken)) {
    // Token nie istnieje lub jest wygasły - przekierowanie do strony logowania
    window.location.href = "/login";
    return;
  }

  // Uruchomienie interwału do odświeżania tokena
  setInterval(refreshAuthToken, REFRESH_INTERVAL);
};

// Wywołanie funkcji do sprawdzenia stanu autoryzacji
checkAuthStatus();