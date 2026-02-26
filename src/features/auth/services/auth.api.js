import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});
export async function login(loginInfo) {
  const res = await api.post("/login", loginInfo);
  return res.data;
}
export async function register(registerInfo) {
  const res = await api.post("/register", registerInfo);
  return res.data;
}
export async function getMe() {
  const res = await api.get("/get-me");
  return res.data;
}
