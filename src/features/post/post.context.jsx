import { createContext, useState } from "react";

 export const postContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [feed, setFeed] = useState(null);
  const value = {
    loading,
    setLoading,
    post,
    setPost,
    feed,
    setFeed,
  };
  return <postContext.Provider value={value}>{children}</postContext.Provider>;
};
