import { formatDate } from "helpers";
import { axiosInstance } from "services";
import axios from "axios";

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

export const forget_password = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/forget-password", data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const reset_password = async (token, id, data) => {
  console.log({ token, id, data });
  try {
    const response = await axiosInstance.post(
      `/auth/reset-password/?token=${token}&id=${id}`,
      { password: data }
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const me = async () => {
  try {
    const response = axiosInstance.get("/me");
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const get_All_Operators = async () => {
  try {
    const response = await axiosInstance.get("/operators");
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const create_New_Operator = async (data) => {
  try {
    const response = await axiosInstance.post("/operators", data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const delete_Operator = async (id) => {
  try {
    const response = await axiosInstance.delete(`/operators/${id}`);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const get_All_Investigators = async () => {
  try {
    const response = await axiosInstance.get("/investigators");
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const create_New_Investigator = async (data) => {
  try {
    const response = await axiosInstance.post("/investigators", data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const delete_Investigator = async (id) => {
  try {
    const response = await axiosInstance.delete(`/investigators/${id}`);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const get_All_Criminals = async () => {
  try {
    const response = await axiosInstance.get("/criminals");
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const create_New_Criminal = async (data) => {
  try {
    const formData = new FormData();
    data = {
      ...data,
      image: data.image[0],
    };

    for (const key in data) {
      formData.append(key, data[key]);
    }

    const response = await axiosInstance.post("/criminals", formData);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const update_Criminal = async (id, data) => {
  try {
    const formData = new FormData();
    data = {
      ...data,
      image: data.image[0],
    };

    for (const key in data) {
      formData.append(key, data[key]);
    }

    const response = await axiosInstance.patch(`/criminals/${id}`, formData);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const delete_Criminal = async (id) => {
  try {
    const response = await axiosInstance.delete(`/criminals/${id}`);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const create_fir = async (data) => {
  try {
    const formData = new FormData();
    data = {
      ...data,
      relevantDocs: data.relevantDocs[0],
      datetime: formatDate(data?.datetime),
    };

    for (const key in data) {
      formData.append(key, data[key]);
    }

    const response = await axiosInstance.post("/firs", formData);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const get_All_FIRS = async () => {
  try {
    const response = await axiosInstance.get("/firs");
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const get_Pending_FIRS = async () => {
  try {
    const response = await axiosInstance.get("/firs/pending");
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const get_Active_FIRS = async () => {
  try {
    const response = await axiosInstance.get("/firs/active");
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const get_Completed_FIRS = async () => {
  try {
    const response = await axiosInstance.get("/firs/completed");
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const get_Closed_FIRS = async () => {
  try {
    const response = await axiosInstance.get("/firs/closed");
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const approve_FIR = async (id, data) => {
  let obj = {
    investigatorId: data,
  };
  try {
    const response = await axiosInstance.post(`/firs/approve/${id}`, obj);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const delete_FIR = async (id) => {
  try {
    const response = await axiosInstance.delete(`/firs/${id}`);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const update_Operator = async (id, data) => {
  try {
    const response = await axiosInstance.patch(`/operators/${id}`, data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const update_Investigator = async (id, data) => {
  try {
    const response = await axiosInstance.patch(`/investigators/${id}`, data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const update_Status = async (id, statusValue) => {
  try {
    const response = await axiosInstance.get(
      `/firs/update-status/${id}?status=${statusValue}`
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const check_criminal_status = async (CNIC) => {
  try {
    const response = await axiosInstance.get(
      `/criminals/check-status?CNIC=${CNIC?.CNIC}`
    );
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const get_news = async () => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=pakistan&apiKey=f3ddb1799a1b4ce7a5ac1854b410d950"
    );
    return response.data.articles;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getEvidences = async (firId) => {
  try {
    return await axiosInstance.get(`firs/${firId}/evidence`);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const postEvidence = async (firId, files) => {
  try {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    return await axiosInstance.post(`firs/${firId}/evidence`, formData);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteEvidenceId = async (id) => {
  try {
    return await axiosInstance.delete(`/firs/evidence/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
