import axios from "axios";
import { refreshAuth } from "./authHeader";

/* const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI5MDg0ZjdkMy00NDk2LTRmNDQtYmFkZi03MTQ5YmM5ODM3OGQiLCJuYW1lIjoicHJha3R5a2lGaXJzdE5hbWVwcmFrdHlraUxhc3ROYW1lMjAyMzAzMDEwODQyMTQ5NzY5IiwiZW1haWwiOiJwcmFrdHlraUBtb2JpdG91Y2gubmV0IiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJVV1BGUk5GRUtFSlZXVzJJVEdUNU1QQVVaSzNVQ1FENiIsInJvbGUiOiJTaGVsdGVyIiwibG9naW5Qcm92aWRlciI6IkxhcGthIiwibmJmIjoxNjgwMDg5MjIwLCJleHAiOjE2ODAwOTAxMjAsImlhdCI6MTY4MDA4OTIyMH0.EDnVT2urd9qg7GgQ2CR_Ly50EnvOTYgpDqOHuT_M7t8BjNewqt8OT2xUHKLJ9gieRim-8pQXhi3UdnBlRFiQdWjy_XIURCzf45cF-BRAgfwmoTNuFzmylu2swUtxTwFnj1BxHDQlHbSG4ektY90q0YcmKvWJ_qGA13DdkQuX-2Jiyemagx-by0hd32g8obEHXBykyyc8SWWluUCFhxt5ie6b2S2yP6pP9RtxQwQGhBfW6rafpVKB6MvXx_NadWO-ZYbGK9kbYLNKYyYJy8lf1IMqfXqJf51JOyP6WUZFWIEyrNAj6VG1H87uNYl16Fcp4P67wdryoYuJ_8oMHa3QsA"; */
const token = localStorage.getItem("accessToken");
const token2 = token?.replace(/["]/g, "");
console.log(token2);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
   const { config, message, response } = error;
   console.log(error.response.status);
   if (error.response) {
     if (error.response.status === 401) {
       try {
         const delayRetryRequest = new Promise<void>((resolve) => {
           setTimeout(() => {
             refreshAuth();
             console.log("retry the request", config.url);
             resolve();
           }, config.retryDelay || 1000);
         });
         return delayRetryRequest.then(() => axios(config));
       } catch (error) {
         return Promise.reject(error);
       }
     }
   }

    return Promise.reject(error);
  }
);

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
