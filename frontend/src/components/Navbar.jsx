import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
const user = useSelector((state)=>state.user.user)
  return (
    <nav className="bg-gray-800 p-4 mb-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Logo"
          className="h-8"
        />
        <div className="flex items-center">
         {user.role === 'recruiter'?( <div className="hidden md:flex space-x-6 mr-4">
            <a href="#" className="text-white hover:text-gray-400">Jobs</a>
            <a href="#" className="text-white hover:text-gray-400">Companies</a>
            
          </div>):
          ( <div className="hidden md:flex space-x-6 mr-4">
            <a href="#" className="text-white hover:text-gray-400">Home</a>
            <a href="#" className="text-white hover:text-gray-400">About</a>
            <Link to="/user/jobs" className="text-white hover:text-gray-400">Jobs</Link>
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
          <Link to="#" className="block text-white hover:text-gray-400">Jobs</Link>
          <Link to="#" className="block mt-2 text-white hover:text-gray-400">Companies</Link>
         
        </div>):(<div className="md:hidden mt-4">
          <Link to="#" className="block text-white hover:text-gray-400">Home</Link>
          <Link to="#" className="block mt-2 text-white hover:text-gray-400">About</Link>
          <Link to="#" className="block mt-2 text-white hover:text-gray-400">Contact</Link>
        </div>)
      )}
      {isProfileMenuOpen && (
        <div className="absolute top-16 right-4 bg-gray-700 rounded-lg shadow-lg p-4 w-48">
          <p className="text-white">{user?.fullName}</p>
          <Link to="/profile" className="block mt-2 text-white hover:text-gray-400">Profile</Link>
          <Link to="#" className="block mt-2 text-white hover:text-gray-400">Logout</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
