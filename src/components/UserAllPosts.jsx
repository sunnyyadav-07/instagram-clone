import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
const UserAllPosts = ({posts}) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      {/* Tabs */}
      <div className="flex justify-center border-t border-gray-300">
        <button className="flex items-center gap-2 px-6 py-3 border-t-2 border-black font-semibold text-sm">
          POSTS
        </button>

        <button className="flex items-center gap-2 px-6 py-3 text-gray-500 text-sm">
          REELS
        </button>

        <button className="flex items-center gap-2 px-6 py-3 text-gray-500 text-sm">
          TAGGED
        </button>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-1 mt-1">
        {posts?.map((post) => (
          <div
            key={post._id}
            className="relative group aspect-square bg-gray-100 cursor-pointer overflow-hidden"
          >
            {/* Image */}
            <img
              src={post.imgUrl}
              alt="post"
              className="w-full h-full object-cover"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 text-white font-semibold transition">
              {/* likes */}
              <div className="flex items-center gap-1">
                <FaRegHeart />
              </div>

              {/* comments */}
              <div className="flex items-center gap-1">
                <FaRegComment />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserAllPosts;
