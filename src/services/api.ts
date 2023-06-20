import axios from "axios";

export const apiKenzieKars = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 5000,
});

export const api = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 10000,
});
