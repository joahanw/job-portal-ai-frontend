import axios from "axios";

const API_BASE_URL = "http://localhost:9000/api";

const api = axios.create({
  // baseUrl: "jobportal-api.168.110.215.231.sslip.io"
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/vnd.johanwork+json;v=1.0",
  },
});

api.interceptors.request.use((config) => {
  const publicRoutes = [
    "/auth/login",
    "/auth/signup",
    "/auth/forgot-password",
    "/auth/reset-password",
  ];

  const isPublic = publicRoutes.some((route) => config.url?.startsWith(route));

  if (!isPublic) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;
