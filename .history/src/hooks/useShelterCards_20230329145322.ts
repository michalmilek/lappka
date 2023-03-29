import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getShelterCards } from "../services/ShelterServices";

const useShelterStats = () => {
  return useQuery({
    queryKey: ["shelterCards"],
    queryFn: () => {
      const response = getShelterCards();
      return response;
    },
  });
};

export default useShelterStats;
