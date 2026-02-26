import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const { user, loading, handleLogin } = useAuthContext();
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    await handleLogin(loginDetails);
    navigate("/");
    console.log("user logged in");
    console.log(loginDetails);
    setLoginDetails({ username: "", password: "" });
  }
  if (loading)
    return (
      <p className="flex justify-center gap-6 flex-col text-white items-center bg-[#101010] min-h-screen">
        Loading...
      </p>
    );
  return (
    <div className="flex justify-center gap-6 flex-col text-white items-center bg-[#101010] min-h-screen">
      <h1 className="text-3xl font-medium">Login</h1>
      <form className="flex flex-col gap-4 w-[30%]" onSubmit={handleSubmit}>
        <input
          type="text"
          value={loginDetails.username}
          name="username"
          placeholder="enter your username"
          onChange={handleChange}
          className="bg-[#717070] text-white  text-xl px-4 py-2 rounded-md"
        />
        <input
          type="text"
          value={loginDetails.password}
          name="password"
          onChange={handleChange}
          placeholder="enter your password"
          className="bg-[#717070] text-white    text-xl px-4 py-2 rounded-md"
        />
        <button className="bg-[#942222]  hover:bg-red-900 text-white cursor-pointer   text-xl px-4 py-2 rounded-md">
          login
        </button>
        <p>
          Don't have an account ?{" "}
          <Link to={"/register"} className="text-red-700">
            register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
