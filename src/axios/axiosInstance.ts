import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "https://api.openweathermap.org/data/2.5",
};

export const axiosInstance: AxiosInstance = axios.create(config);

// API OPENWEATHERMAP

// https://openweathermap.org/api/one-call-3#call
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
