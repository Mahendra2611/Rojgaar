import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CustomButtonBlue } from './CustomButton';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
const user = useSelector((state)=>state.user.user)
console.log(user)
  return (
    <nav className="bg-gray-800 p-4 mb-4 w-full ">
      <div className="max-w-7xl  mx-auto flex items-center justify-between">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Logo"
          className="h-8"
        />
        <div className="flex items-center">
        {Object.keys(user).length === 0 &&<div className="hidden md:flex space-x-6 mr-4"><Link to="/signin" className="text-white hover:text-gray-400">LogIn</Link>
          <Link to="/signup" className="text-white hover:text-gray-400">Register</Link></div>}
         {user.role === 'recruiter'?( <div className="hidden  md:flex space-x-6 mr-4">
            <Link to="/job" className="text-white hover:text-gray-400"><CustomButtonBlue>Jobs</CustomButtonBlue></Link>
            <Link to="/company" className="text-white hover:text-gray-400"><CustomButtonBlue>Company</CustomButtonBlue></Link>
            
          </div>):
          ( <div className="hidden md:flex space-x-6 mr-4">
            <Link to="/user/jobs" className="text-white rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Saved Jobs</Link>
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
      {isMenuOpen && (
        
        user.role === 'recruiter' ? (<div className="md:hidden mt-4">
          <Link to="/job" className="block text-white hover:text-gray-400"><CustomButtonBlue>Jobs</CustomButtonBlue></Link>
          <Link to="/company" className="block mt-2 text-white hover:text-gray-400"><CustomButtonBlue>Company</CustomButtonBlue></Link>
         
        </div>):(<div className="inline-flex flex-wrap gap-1 md:hidden mt-4">
          <Link to="/user/jobs" className="text-white rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Saved Jobs</Link>
            <Link to="/user/intern" className="text-white rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Intern</Link>
            <Link to="user/jobs"className="text-white rounded-xl py-2 px-4 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca]">Jobs</Link>
        </div>)
      )}
      {isProfileMenuOpen && (
        <div className="absolute z-50 top-16 right-4 bg-gray-700 rounded-lg shadow-lg p-4 w-48 flex flex-col">
          <p className="text-emerald-500 underline">{user?.fullName}</p>
         {user.role === 'recruiter'?( <Link to="/adminprofile" onClick={toggleProfileMenu} className="inline-block rounded-lg py-1 px-2 mt-2 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca] text-white hover:text-gray-400">Profile</Link>):( <Link to="/profile" onClick={toggleProfileMenu} className="inline-block rounded-lg py-1 px-2 mt-2 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca] text-white hover:text-gray-400">Profile</Link>)}
          <Link to="/logout"  onClick={toggleProfileMenu} className="inline-block rounded-lg  mt-2 bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca] py-1 px-2 text-white hover:text-gray-400">Logout</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
