/* eslint-disable react/no-unescaped-entities */

import { account } from "../../appwrite/config";
import { ID } from "appwrite";
import { useState } from "react";
import LoginForm from "./Login";
const SignupForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    // confirmPassword: "",
  });
  const [isLogin, setIsLogin] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const signupFun = await account.create(
      ID.unique(),
      userData.email,
      userData.password,
      userData.name
    );
    signupFun.then(
      (res) => {
        console.log(res, "res");
      },
      (err) => {
        console.error(err);
      }
    );
  };
  if (isLogin) {
    return <LoginForm />;
  }
  return (
    <div className="mt-9 min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create an Account
        </h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={userData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={userData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Create a password"
            />
          </div>
          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Confirm your password"
            />
          </div> */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Sign Up
          </button>
        </form>
        <hr className="mx-auto my-4 w-20 border-gray-300 mt-5" />
        <p className="text-center text-gray-600 mt-3">
          Already have an account?
        </p>
        <p
          className="text-center text-green-600 hover:text-green-800 font-medium cursor-pointer"
          onClick={() => setIsLogin(true)}
        >
          Sign In
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
