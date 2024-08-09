/* eslint-disable react/no-unescaped-entities */
import {useState } from "react";
import { account } from "../../appwrite/config";
import { ID } from "appwrite";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [otpSent, setOtpSent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userId, setUserId] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleOTP = async () => {
    try {
      const response = await account.createPhoneToken(ID.unique(), phoneNumber);
      setUserId(response.userId);
      setOtpSent(true);
      toast.success("OTP sent to your phone number.");
    } catch (error) {
      console.error(error);
      toast.error("Error sending OTP. Please try again.");
    }
  };
  const handleOtpLogin = async () => {
    try {
      const session = await account.updatePhoneSession(userId, otp);
      const user = await account.get();
      console.log("User details:", user);
      toast.success("Login successful!");
      navigate("/");
      console.log(session);
    } catch (error) {
      console.error(error);
      toast.error("Invalid OTP. Please try again.");
    }
  };
  const handleEmailLogin = async () => {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      console.log("User details:", user);
      toast.success("Login successful!");
      navigate("/");
      console.log(session); 
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {isLogin ? "Login with OTP" : "Welcome Back"}
        </h2>
        <form>
          {isLogin ? (
            <>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone No.
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your Phone No."
                />
              </div>

              {otpSent && (
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="otp"
                  >
                    OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter the OTP"
                  />
                </div>
              )}
              {!otpSent ? (
                <button
                  type="button"
                  onClick={handleOTP}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Send OTP
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleOtpLogin}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Login with OTP
                </button>
              )}
            </>
          ) : (
            <>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="mr-2 leading-tight"
                  />
                  <label
                    htmlFor="remember-me"
                    className="text-sm text-gray-600"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="javascript:void(0)"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="button"
                onClick={handleEmailLogin}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              className="text-blue-600 hover:text-blue-800 font-bold cursor-pointer"
            >
              Login with Email and Password
            </span>
          ) : (
            <span
              onClick={() => setIsLogin(true)}
              className="text-blue-600 hover:text-blue-800 font-bold cursor-pointer"
            >
              Login with OTP
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
