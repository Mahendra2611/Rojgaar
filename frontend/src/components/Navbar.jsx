import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LOGO from "../assets/logo.jpg"
import { useNavigate } from 'react-router-dom';
import { CustomButtonBlue } from './CustomButton';
import { Pattern2, Pattern3 } from './Background';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
 const navigate = useNavigate();
  const toggleMenu = () => {setIsMenuOpen(!isMenuOpen)};
  const toggleProfileMenu = () => {navigate("/profile")};
const user = useSelector((state)=>state.user.user)
//console.log(isProfileMenuOpen)
  return (
   
    <nav className="bg-gray-800 p-4   w-[100vw] ">
      <div className="  mx-auto flex items-center justify-between">
        <img
          src={LOGO}
          alt="Logo"
          className="h-12 rounded-full"
        />
        
        <div className="flex items-center">
        {Object.keys(user).length === 0 &&<div className="hidden md:flex space-x-6 mr-4"><Link to="/signin"  className="text-white rounded-xl py-2 px-4 bg-[#39b97d] shadow-[inset_5px_5px_5px_-1px_#20754e,inset_-5px_-5px_5px_-1px_#53e6a1]">LogIn</Link>
          <Link to="/signup" className="text-white rounded-xl py-2 px-4 bg-[#39b97d] shadow-[inset_5px_5px_5px_-1px_#20754e,inset_-5px_-5px_5px_-1px_#53e6a1]">Sign Up</Link></div>}
         {
          ( <div className="hidden md:flex space-x-6 mr-4">
             <Link to="/"className="text-white rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Home</Link>
            <Link to="/user/savedjobs" className="text-white rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Saved Jobs</Link>
            <Link to="/user/intern" className="text-white rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Internship</Link>
            <Link to="user/jobs"className="text-white rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Jobs</Link>
            
          </div>)}
          <img
            src={user?.profile?.profilePhoto}
            alt="Profile"
            className="h-10 w-10 rounded-full cursor-pointer"
            onClick={toggleProfileMenu}
          />
          <div className="md:hidden ml-4">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile View Navbar */}
      {isMenuOpen && (
  Object.keys(user).length === 0 ? (
    <>
    <div className="md:hidden mt-2 grid grid-cols-2 gap-2 items-center ">
      <Link to="/signin" className="text-white rounded-xl min-w-[45%] text-center py-2 px-4 bg-[#39b97d] shadow-[inset_5px_5px_5px_-1px_#20754e,inset_-5px_-5px_5px_-1px_#53e6a1]">Log In</Link>
      <Link to="/signup" className="text-white rounded-xl min-w-[45%] text-center py-2 px-4 bg-[#39b97d] shadow-[inset_5px_5px_5px_-1px_#20754e,inset_-5px_-5px_5px_-1px_#53e6a1]">Sign Up</Link>
    <Link to="/"className="text-white rounded-xl min-w-[45%] text-center py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Home</Link>
    <Link to="/user/savedjobs" className="text-white min-w-[45%] text-center rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Saved Jobs</Link>
    <Link to="/user/intern" className="text-white min-w-[45%] text-center rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Internship</Link>
    <Link to="/user/jobs" className="text-white min-w-[45%] text-center rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]"> Jobs</Link>
  </div></>
  ) : (
     (
      <div className="inline-flex flex-wrap  gap-2 md:hidden mt-4">
         <Link to="/logout" className="text-white rounded-xl  min-w-[45%] text-center py-2 px-4 bg-[#39b97d] shadow-[inset_5px_5px_5px_-1px_#20754e,inset_-5px_-5px_5px_-1px_#53e6a1]">Log Out</Link>
         <Link to="/"className="text-white min-w-[45%] text-center rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Home</Link>
        <Link to="/user/savedjobs" className="text-white min-w-[45%] text-center rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Saved Jobs</Link>
        <Link to="/user/intern" className="text-white min-w-[45%] text-center rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Internship</Link>
        <Link to="/user/jobs" className="text-white min-w-[45%] text-center rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]"> Jobs</Link>
      </div>
    )
  )
)}

      
    </nav>
  
  );
};

export default Navbar;
