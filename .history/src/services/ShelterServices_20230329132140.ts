import axios from "axios";
import React from "react";

const token = localStorage.getItem("accessToken");
console.log(token);

export const getShelterStats = () => {
  const response = axios
    .get("https://lappka.mobitouch.pl/pet/shelters", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));

  return response;
};
