import axios from "axios";
import { toast } from "react-toastify";
import server from "../environment";

const api = axios.create({
  baseURL: `${server}`,
  withCredentials: true,
});

export default api;
