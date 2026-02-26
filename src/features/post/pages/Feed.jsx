import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
const Feed = ({ data }) => {
  return (
    <div>
      <div className="bg-[#412c2c0e] w-100 rounded-md space-y-6 p-3 border border-[#4d4c4c]">
        <div className="flex items-center gap-6 ">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src={data.user.profileImage}
              alt="profile image"
              className="w-full h-full  object-cover"
            />
          </div>
          <p className="font-semibold">{data.user.username}</p>
        </div>
        <div className="rounded-md w-full max-h-[600px] overflow-hidden bg-black flex items-center justify-center">
          <img
            src={data.imgUrl}
            alt="user post"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full flex text-2xl items-center justify-between ">
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2 ">
              <FaRegHeart />
              <p className="text-xl">0</p>
            </div>
            <div className="flex items-center gap-2 ">
              <FaRegComment />
              <p className="text-xl">0</p>
            </div>

            <RiSendPlaneLine />
          </div>
          <FaRegBookmark />
        </div>
        <p className="text-xl">{data.caption}</p>
      </div>
    </div>
  );
};

export default Feed;
