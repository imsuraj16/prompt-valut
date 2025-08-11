import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/userActions";

const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const registerHandler = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Login to <span className="text-yellow-500">PromptVault</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(registerHandler)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Username</label>
            <input
              type="username"
              placeholder="Enter your username"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
              {...register("username")}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500"
              {...register("password")}
            />
          </div>

          {/* Button */}
          <button className="w-full bg-yellow-500 text-black p-3 rounded font-semibold hover:bg-yellow-400">
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-gray-400 text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-yellow-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
