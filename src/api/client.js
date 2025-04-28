import axios from "axios";

export const StaticURL = "http://127.0.0.1:8000/media/";
export const API_BASE_URL = "http://127.0.0.1:8000/api/";
     
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// apiClient.interceptors.request.use(async (req) => {
//   const access_token = JSON.parse(localStorage.getItem("authTokens")).access;
//   req.headers.Authorization = `Bearer ${access_token}`;
//   return req;
// });

export default apiClient;