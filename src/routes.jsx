import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Notification from "./pages/Notification";
import RequestSentPage from "./pages/RequestSentPage";
import SearchPage from "./pages/SearchPage";
import CreatePost from "./pages/CreatePost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "explore", element: <Explore /> },
      { path: "notifications", element: <Notification /> },
      { path: "requests", element: <RequestSentPage /> },
      { path: "search", element: <SearchPage /> },
      { path: "create", element: <CreatePost /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);
