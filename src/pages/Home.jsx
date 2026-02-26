import React, { useEffect } from "react";
import Feed from "../features/post/pages/Feed";
import { usePostContext } from "../features/post/hook/usePostContext";

const Home = () => {
  const { handleGetFeed, feed } = usePostContext();
  console.log(feed);
  useEffect(() => {
    handleGetFeed();
  }, []);
  return (
    <div className="flex items-center gap-2 flex-col py-10 text-white">
      {feed?.map((post) => (
        <Feed key={post._id} data={post}/>
      ))}
    </div>
  );
};

export default Home;
