import axios from "axios";
import React from "react";

const token = localStorage.getItem("accessToken");
console.log(token);

export const getShelterStats = () => {
  const response = axios
    .get(process.env.REACT_APP_API_URL_PET + "/shelters/stats", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => res.data)
    .catch((e) => console.log(e));

  return response;
};
