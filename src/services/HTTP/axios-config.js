import axios from "axios";
import { BASE_URL } from "constant";
import { retrieveJWT, setJWT } from "helpers";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (!config.headers["Authorization"]) {
      const jwt = retrieveJWT();
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
      axiosInstance.defaults.headers["Authorization"] = jwt;
      setJWT(jwt);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
