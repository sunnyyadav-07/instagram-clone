import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // console.log(error);
    // console.log(error.status);
    if (error.status === 401) {
      console.log("Unauthorized, redirecting to login...");
      window.location.href="/login"
    }
    return Promise.reject(error);
  },
);