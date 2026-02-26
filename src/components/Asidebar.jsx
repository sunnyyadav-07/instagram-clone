import { AiFillHome } from "react-icons/ai";
import { FaUser, FaPlusSquare, FaSearch, FaHourglassEnd } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineExplore, MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
// import { MdLogout } from "react-icons/md";
const Asidebar = () => {
  return (
    <div className=" fixed h-full  flex flex-col w-[20%] bg-[#0e0e0e] text-[white] px-4 py-6 group gap-4 ">
      <h1 className="text-[1.3rem] whitespace-nowrap">My Instgram Account</h1>

      <div className="flex flex-col space-y-4">
        <div className="asideContent">
          <AiFillHome />
          <NavLink to={"/"}>Home</NavLink>
        </div>
        <div className="asideContent">
          <FaUser />
          <NavLink to={"/profile"}>Profile</NavLink>
        </div>
        <div className="asideContent">
          <IoNotifications />
          <NavLink to={"/notifications"}>Notfications</NavLink>
        </div>
        <div className="asideContent">
          <FaPlusSquare />
          <NavLink to={"/create"}>Create post</NavLink>
        </div>
        <div className="asideContent">
          <MdOutlineExplore />
          <NavLink to={"/explore"}>Explore</NavLink>
        </div>
        <div className="asideContent">
          <FaSearch />
          <NavLink to={"/search"}>Search</NavLink>
        </div>
        <div className="asideContent">
          <FaHourglassEnd />
          <NavLink to={"/requests"}>Request sent</NavLink>
        </div>
        <div className="asideContent">
          <MdLogout />
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default Asidebar;
