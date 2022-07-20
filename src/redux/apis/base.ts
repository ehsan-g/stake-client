import axios from "axios";

export const publicApi = axios.create({
  baseURL: process.env.REACT_APP_GOOGLE_API,
});
