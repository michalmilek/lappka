import axios from "axios";
import React from "react";

export const getShelterStats = () => {
  const response = axios
    .get(process.env.REACT_APP_API_URL_PET + "/shelters/stats")
    .then((res) => res.data)
    .catch((e) => console.log(e));

  return response;
};
