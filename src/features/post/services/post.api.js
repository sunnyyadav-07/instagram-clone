import { api } from "../../config/axiosInstance";

export async function getFeed() {
  const response = await api.get("/posts/feed");
  return response.data;
}
export async function getUserPost() {
  const response = await api.get("/posts/user-post");
  return response.data;
}
export async function likePost(postId) {
  const response = await api.post("/posts/like/" + postId);
  return response.data;
}
export async function unLikePost(postId) {
  const response = await api.delete("/posts/unlike/" + postId);
  return response.data;
}
