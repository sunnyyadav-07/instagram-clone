import { useEffect } from "react";
import { useAuthContext } from "../features/auth/hooks/useAuthContext";
import { usePostContext } from "../features/post/hook/usePostContext";
import UserAllPosts from "../components/userAllPosts";

const Profile = () => {
  const { handleGetMe, user } = useAuthContext();
  const { post, loading ,handleGetUserPost} = usePostContext();
  console.log(post);
  console.log(user);
  useEffect(() => {
    handleGetMe()
    handleGetUserPost()
  }, []);
  return (
    <div className="max-w-3xl mx-auto text-white p-4">
      {/* top section */}
      <div className="flex gap-6 items-center">
        {/* profile image */}
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
          <img
            src={user.profileImage}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* right info */}
        <div className="flex flex-col gap-2 flex-1">
          {/* username row */}
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold">{user.username}</h2>
          </div>

          {/* stats */}
          <div className="flex gap-6 text-sm">
            <span>
              <b>{post?.posts.length}</b> posts
            </span>
            <span>
              <b>{user.followersCount}</b> followers
            </span>
            <span>
              <b>{user.followingCount}</b> following
            </span>
          </div>

          {/* name */}
          <div className="text-sm">
            <p className="font-semibold">{user?.name}</p>
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="flex gap-4 mt-4">
        <button className="flex-1 bg-gray-800 hover:bg-gray-700 py-2 rounded-lg font-medium">
          post
        </button>

        <button className="flex-1 bg-gray-800 hover:bg-gray-700 py-2 rounded-lg font-medium">
          saved
        </button>
      </div>
      <UserAllPosts posts={post?.posts}/>
    </div>
  );
};

export default Profile;
