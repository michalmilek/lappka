import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getShelterCards } from "../services/ShelterServices";

const useShelterCards = (currentPage: number) => {
  return useQuery({
    queryKey: ["shelterCards", currentPage],
    queryFn: () => {
      const response = getShelterCards(currentPage);
      return response;
    },
    keepPreviousData: true,
  });
};

export default useShelterCards;
