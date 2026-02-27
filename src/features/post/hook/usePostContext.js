import { useContext } from "react";
import { postContext } from "../post.context";
import { getFeed, getUserPost } from "../services/post.api";

export const usePostContext = () => {
  const context = useContext(postContext);
  const { loading, setLoading, post, setPost, feed, setFeed } = context;

  const handleGetFeed = async () => {
    setLoading(true);
    const response = await getFeed();
    setFeed(response.feed);
    setLoading(false);
  };
  const handleGetUserPost = async () => {
    setLoading(true);
    const response = await getUserPost();
    setPost(response);
    setLoading(false);
  };
  return { feed, handleGetFeed,handleGetUserPost, loading, post };
};
