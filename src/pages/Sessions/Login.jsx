/* eslint-disable react/no-unescaped-entities */
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import SignUp from "../Sessions/Signup";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    otp: "",
  });

  const [isLogin, setIsLogin] = useState(true);
  const [otpSent, setOtpSent] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOTP = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: formData.phoneNumber }),
      });

      if (!response.ok) throw new Error("Failed to send OTP. Try again.");

      await toast.success("OTP sent successfully!");
      setOtpSent(true);
    } catch (error) {
      console.error("OTP Error:", error.message);
      toast.error(error.message);
    }
  };

  const handleOtpLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/otp-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: formData.phoneNumber,
          otp: formData.otp,
        }),
      });

      if (!response.ok) throw new Error("Invalid OTP. Try again.");

      const result = await response.json();
      localStorage.setItem("token", result.token);
      setUser(result.user);

      await toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("OTP Login Error:", error.message);
      toast.error(error.message);
    }
  };

  const handleEmailLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) throw new Error("Login failed. Check credentials.");

      const result = await response.json();
      console.log(result, "result");

      localStorage.setItem("token", result.token);
      if (result.userDetails.role === "admin") {
        localStorage.setItem("admin", true);
      } else {
        localStorage.setItem("admin", false);
      }
      setUser(result.userDetails);
      await toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Email Login Error:", error.message);
      toast.error(error.message);
    }
  };

  if (isSignUp) return <SignUp />;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {isLogin ? "Login with OTP" : "Login with Email"}
        </h2>

        <form>
          {isLogin ? (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone No.
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your Phone No."
                />
              </div>

              {otpSent && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    OTP
                  </label>
                  <input
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter the OTP"
                  />
                </div>
              )}

              {!otpSent ? (
                <button
                  type="button"
                  onClick={handleOTP}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Send OTP
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleOtpLogin}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Login with OTP
                </button>
              )}
            </>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="button"
                onClick={handleEmailLogin}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Sign In
              </button>
            </>
          )}
        </form>

        <p className="text-center text-gray-600 mt-6">
          {isLogin ? (
            <span
              onClick={() => setIsLogin(false)}
              className="text-green-600 hover:text-green-800 font-bold cursor-pointer"
            >
              Login with Email and Password
            </span>
          ) : (
            <span
              onClick={() => setIsLogin(true)}
              className="text-green-600 hover:text-green-800 font-bold cursor-pointer"
            >
              Login with OTP
            </span>
          )}
        </p>

        <hr className="mx-auto my-4 w-20 border-gray-300" />

        <p className="text-center text-gray-600 mt-3">Don't have an account?</p>
        <p
          className="text-center text-green-600 hover:text-green-800 font-bold cursor-pointer"
          onClick={() => setIsSignUp(true)}
        >
          Sign Up
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
