import { api } from "../../config/axiosInstance";


export async function getFeed() {
  const response = await api.get("/posts/feed");
  return response.data;
}
export async function getUserPost() {
  const response = await api.get("/posts/user-post");
  return response.data;
}
