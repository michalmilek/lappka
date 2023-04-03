import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getShelterCards } from "../services/ShelterServices";

const useShelterCards = (currentPage: number, pageSize: number = 10) => {
  return useQuery({
    queryKey: ["shelterCards", currentPage, pageSize],
    queryFn: () => {
      const response = getShelterCards(currentPage, pageSize);
      return response;
    },
    keepPreviousData: true,
  });
};

export default useShelterCards;
