import axios from "axios";

export const AuthInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const PetInstance = axios.create({
  baseURL: process.env.REACT_APP_PET_URL,
});
