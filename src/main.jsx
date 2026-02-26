import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.jsx";
import { AuthContextProvider } from "./features/auth/auth.context.jsx";
import { PostContextProvider } from "./features/post/post.context.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <PostContextProvider>
      <RouterProvider router={router} />
    </PostContextProvider>
  </AuthContextProvider>,
  // <App />
);
