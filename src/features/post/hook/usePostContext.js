import { useContext } from "react";
import { postContext } from "../post.context";
import { getFeed, getUserPost, likePost } from "../services/post.api";

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
  const handleLikePost = async (postId) => {
    setFeed((prev) =>
      prev.map((post) => post._id === postId)
        ? {
            ...post,
            isLiked: true,
            likeCount: post?.likeCount + 1,
          }
        : post,
    );
    try {
      await likePost(postId);
    } catch (error) {
      setFeed((prev) =>
        prev.map((post) =>
          post._id === postId
            ? {
                ...post,
                isLiked: false,
                likeCount: post?.likeCount - 1,
              }
            : post,
        ),
      );
    }
  };
  const handleUnLikePost = async (postId) => {
    setFeed((prev) =>
      prev.map((post) => post._id === postId)
        ? {
            ...post,
            isLiked: false,
            likeCount: post?.likeCount - 1,
          }
        : post,
    );
    try {
      await likePost(postId);
    } catch (error) {
      setFeed((prev) =>
        prev.map((post) =>
          post._id === postId
            ? {
                ...post,
                isLiked: true,
                likeCount: post?.likeCount + 1,
              }
            : post,
        ),
      );
    }
  };
  return {
    feed,
    handleGetFeed,
    handleGetUserPost,
    handleLikePost,
    handleUnLikePost,
    loading,
    post,
  };
};
