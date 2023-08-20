import axios from "axios";
import { BASE_URL } from "constant";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (!config.headers["Authorization"]) {
      const jwt = localStorage.getItem("jwt");
      config.headers["Authorization"] = jwt;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const jwt = response?.data?.payload?.jwt?.jwtToken;
    if (jwt) {
      localStorage.setItem("jwt", jwt);
      axiosInstance.defaults.headers["Authorization"] = jwt;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
