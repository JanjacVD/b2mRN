import axios from "axios";

export const controller = new AbortController();
export const Api = axios.create({
  baseURL: "https://api.punkapi.com/v2/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  responseType: "json",
  signal: controller.signal
});
