import axios from "axios";

export const apiKenzieKars = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 5000,
})