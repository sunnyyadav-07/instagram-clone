import { useContext } from "react";
import { postContext } from "../post.context";
import { getFeed } from "../services/post.api";

export const usePostContext = () => {
  const context = useContext(postContext);
  const { loading, setLoading, post, setPost, feed, setFeed } = context;

  const handleGetFeed = async () => {
    setLoading(true);
    const response = await getFeed();
    setFeed(response.feed);
    setLoading(false);
  };
  return { feed, handleGetFeed, loading, post };
};
