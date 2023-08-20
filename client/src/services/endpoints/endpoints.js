import { axiosInstance } from "services";

export const login_user = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const register_user = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
