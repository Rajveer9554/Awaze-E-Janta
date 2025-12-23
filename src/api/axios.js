import axios from "axios";


const API = axios.create({
  // baseURL: "http://localhost:8081/api",
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

// ✅ Auto attach token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ✅ Global error handler
API.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err.response?.data || { msg: "Something went wrong" });
  }
);

export default API;