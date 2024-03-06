import axios from "axios";

const baseURL = import.meta.env.VITE_APP_API_BASE;

const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

export { axiosClient, baseURL };
