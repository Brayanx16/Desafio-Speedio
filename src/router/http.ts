import axios from "axios";

const api = "http://192.168.0.107:8000";

const http = axios.create({
  baseURL: api
});

// http.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       config.headers.Authorization = `token ${token}`;
//     }
//     return config;
//   },

//   err => Promise.reject(err)
// );

export default http;
