import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LOGO from "../assets/logo.jpg"
import { CustomButtonBlue } from './CustomButton';
import { Pattern2, Pattern3 } from './Background';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
 
  const toggleMenu = () => {setIsMenuOpen(!isMenuOpen); setIsProfileMenuOpen(false)};
  const toggleProfileMenu = () => {setIsProfileMenuOpen(!isProfileMenuOpen)};
const user = useSelector((state)=>state.user.user)
//console.log(isProfileMenuOpen)
  return (
   
    <nav className="bg-gray-800 p-4  w-full ">
      <div className="  mx-auto flex items-center justify-between">
        <img
          src={LOGO}
          alt="Logo"
          className="h-12 rounded-full"
        />
        
        <div className="flex items-center">
        {Object.keys(user).length === 0 &&<div className="hidden md:flex space-x-6 mr-4"><Link to="/signin"  className="text-white rounded-xl py-2 px-4 bg-[#39b97d] shadow-[inset_5px_5px_5px_-1px_#20754e,inset_-5px_-5px_5px_-1px_#53e6a1]">LogIn</Link>
          <Link to="/signup" className="text-white rounded-xl py-2 px-4 bg-[#39b97d] shadow-[inset_5px_5px_5px_-1px_#20754e,inset_-5px_-5px_5px_-1px_#53e6a1]">Sign Up</Link></div>}
         {user.role === 'recruiter'?( <div className="hidden  md:flex space-x-6 mr-4">
          <Link to="/admin/home" className="text-white hover:text-gray-400"><CustomButtonBlue>Home</CustomButtonBlue></Link>
            <Link to="/job" className="text-white hover:text-gray-400"><CustomButtonBlue>Jobs</CustomButtonBlue></Link>
            <Link to="/company" className="text-white hover:text-gray-400"><CustomButtonBlue>Company</CustomButtonBlue></Link>
            
          </div>):
          ( <div className="hidden md:flex space-x-6 mr-4">
             <Link to="/"className="text-white rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Home</Link>
            <Link to="/user/savedjobs" className="text-white rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Saved Jobs</Link>
            <Link to="/user/intern" className="text-white rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Recuriter Job</Link>
            <Link to="user/jobs"className="text-white rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Admin Jobs</Link>
            
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
    <Link to="/user/savedjobs" className="text-white min-w-[45%] text-center rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Saved</Link>
    <Link to="/user/intern" className="text-white min-w-[45%] text-center rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Recuriter Jobs</Link>
    <Link to="/user/jobs" className="text-white min-w-[45%] text-center rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Admin Jobs</Link>
  </div></>
  ) : (
    user?.role === 'recruiter' ? (
      <div className="md:hidden mt-2 flex flex-wrap gap-2">
        <Link to="/admin/home" className="text-white hover:text-gray-400"><CustomButtonBlue>Home</CustomButtonBlue></Link>
        <Link to="/job" className="block text-white hover:text-gray-400"><CustomButtonBlue>Jobs</CustomButtonBlue></Link>
        <Link to="/company" className="block  text-white hover:text-gray-400"><CustomButtonBlue>Company</CustomButtonBlue></Link>
      </div>
    ) : (
      <div className="inline-flex flex-wrap gap-1 md:hidden mt-4">
         <Link to="/"className="text-white rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Home</Link>
        <Link to="/user/savedjobs" className="text-white rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Saved Jobs</Link>
        <Link to="/user/intern" className="text-white rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Recuriter Jobs</Link>
        <Link to="/user/jobs" className="text-white rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Admin Jobs</Link>
      </div>
    )
  )
)}

      {isProfileMenuOpen && (
        <div className="absolute z-100 top-16 mt-5 right-0 bg-gray-700 rounded-lg shadow-lg p-4 w-48 flex flex-col">
          <p className="text-emerald-500 underline">{user?.fullName}</p>
         {user.role === 'recruiter'?( <Link to="/adminprofile" onClick={toggleProfileMenu} className="inline-block rounded-lg py-1 px-2 mt-2 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca] text-white hover:text-gray-400">Profile</Link>):( <Link to="/profile" onClick={toggleProfileMenu} className="inline-block rounded-lg py-1 px-2 mt-2 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca] text-white hover:text-gray-400">Profile</Link>)}
         {Object.keys(user).length > 0 && <Link to="/logout"  onClick={toggleProfileMenu} className="inline-block rounded-lg  mt-2 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca] py-1 px-2 text-white hover:text-gray-400">Logout</Link>}
        </div>
      )}
    </nav>
  
  );
};

export default Navbar;
