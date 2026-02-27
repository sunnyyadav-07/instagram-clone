// import axios from "axios";
// const api = axios.create({
//   baseURL: "http://localhost:3000/api/auth",
//   withCredentials: true,

import { api } from "../../config/axiosInstance";

// });
export async function login(loginInfo) {
  const res = await api.post("/auth/login", loginInfo);
  return res.data;
}
export async function register(registerInfo) {
  const res = await api.post("/auth/register", registerInfo);
  return res.data;
}
export async function getMe() {
  const res = await api.get("/auth/get-me");
  return res.data;
}


