import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Register = () => {
  const [registerDetails, setRegisterDeatils] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { loading, handleRegister } = useAuthContext();
  const registerHandler = (e) => {
    const { name, value } = e.target;
    setRegisterDeatils({ ...registerDetails, [name]: value });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    await handleRegister(registerDetails);
    navigate("/");
    setRegisterDeatils({
      fullname: "",
      username: "",
      email: "",
      password: "",
    });
    console.log("chl gya");
  }
  // console.log(registerDetails);
  return (
    <div className="flex justify-center gap-6 flex-col items-center text-white bg-[#0d0d0d] min-h-screen">
      <h1 className="text-3xl font-medium">Register</h1>

      <form className="flex flex-col gap-4 w-[30%]" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="enter your full name"
          value={registerDetails.fullname}
          onChange={registerHandler}
          className="bg-[#717070] text-white  text-xl px-4 py-2 rounded-lg"
        />
        <input
          type="text"
          name="username"
          placeholder="enter your username"
          value={registerDetails.username}
          onChange={registerHandler}
          className="bg-[#717070] text-white  text-xl px-4 py-2 rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          value={registerDetails.email}
          onChange={registerHandler}
          className="bg-[#717070] text-white    text-xl px-4 py-2 rounded-lg"
        />
        <input
          type="text"
          name="password"
          placeholder="enter your password"
          value={registerDetails.password}
          onChange={registerHandler}
          className="bg-[#717070] text-white    text-xl px-4 py-2 rounded-lg"
        />
        <button className="bg-[#942222]  hover:bg-red-900 text-white  cursor-pointer  text-xl px-4 py-2 rounded-lg ">
          register
        </button>
        <p>
          Already have an account?{" "}
          <Link to={"/login"} className="text-red-700">
            login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
