import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toggleLoader } from "../redux/loaderSlice"; 
import { addUser } from "../redux/userSlice"; 
import { verify } from "../hooks/verify";
import Loader from "./Loader";
import { END_POINT } from '../utils/constants';
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const dispatch = useDispatch();
  const loader = useSelector((state) => state.loader.loader);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const [isEmail, isPassword] = verify(email, password);
      if (!isEmail || !isPassword) {
        if (!isEmail) toast.error("Email is incorrect");
        if (!isPassword) toast.error("Password is incorrect");
        return;
      }

      const userData = {
        email,
        password,
        role:role.toLowerCase(),
      };
//console.log(userData)
      dispatch(toggleLoader(true));

      const response = await fetch(`${END_POINT}/user/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
//console.log(data)
      if (response.ok) {
        sessionStorage.clear();
        dispatch(addUser(data.user));
        if (data.user.role === "recruiter") {
          navigate("/admin/home");
        } else if (data.user.role === "student") {
          navigate("/");
        } else {
          toast.error(data.message);
        }
      } else {
        toast.error(data.message);
        sessionStorage.clear();
      }
    } catch (error) {
      toast.error("Something went wrong");
      sessionStorage.clear();
    } finally {
      dispatch(toggleLoader(false));
    }
  };

  return loader ? (
    <Loader />
  ) : (
    <div className="flex items-center justify-center min-h-[100dvh] bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-8">
      <div className="w-full max-w-md p-6 bg-[#1e293b] border-0 shadow-lg rounded-lg">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white">Sign in</h2>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              className="w-full p-2 h-8 sm:h-10 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-2 h-8 sm:h-10 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="role" className="text-white">
              Role
            </label>
            <select
              id="role"
              className="w-full px-2 sm:p-2 text-[14px] h-8 sm:h-10 border border-gray-300 rounded"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option className="text-[16px]" value="" disabled defaultChecked>
                Select your role
              </option>
              <option value="student">Student</option>
              <option value="recruiter">Recruiter</option>
            </select>
          </div>
          <div className="text-white text-[14px] cursor-pointer underline md:text-[16px] flex justify-between items-center">
            <h1 onClick={()=>{navigate("/signup")}}>Sign up</h1>
            <h1>Forget password</h1>
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full p-2 h-8 sm:h-10 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center"
          >
            Sign In
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
};

export default Signin;
