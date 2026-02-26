import { Outlet } from "react-router-dom";
import Asidebar from "./components/Asidebar";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-black flex ">
      <Asidebar />
      <div className="ml-[17%] w-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
