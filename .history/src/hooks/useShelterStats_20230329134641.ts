import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getShelterStats } from "../services/ShelterServices";

const useShelterStats = () => {
  return useQuery({
    queryKey: ["shelterStats"],
    queryFn: () => {
      const response = getShelterStats();
      return response;
    },
  });
};

export default useShelterStats;
