import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getShelterCards } from "../services/ShelterServices";

const useShelterCards = (currentPage?: number) => {
  return useQuery({
    queryKey: ["shelterCards", currentPage ? currentPage : null],
    queryFn: () => {
      const response = getShelterCards(currentPage && currentPage);
      return response;
    },
  });
};

export default useShelterCards;
