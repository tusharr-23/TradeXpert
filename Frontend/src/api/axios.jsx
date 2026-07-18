import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true,
});

//Showing toast notification for error responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(error.response?.data?.message || "Something went wrong", {
      position: "bottom-right",
    });

    return Promise.reject(error);
  },
);

export default api;
