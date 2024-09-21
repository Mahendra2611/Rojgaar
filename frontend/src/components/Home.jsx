import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButtonBlue,CustomButtonGreen } from './CustomButton';

const Home= () => {
  const navigate = useNavigate();
  const searchref = useRef("");
 
  return (

    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-200 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-2xl  md:text-4xl font-bold mb-4">Find Your Dream Job or Internship</h1>
        <p className="text-lg mb-8">Create a resume in minutes and apply with one click</p>
        <div className='flex gap-2 md:gap-10 justify-center items-center sm:flex-nowrap px-2'>
         <CustomButtonBlue onClick={()=>{navigate("/user/resume")}}>Resume Builder</CustomButtonBlue>
          <button onClick={()=>{navigate("/user/jobs")}} ><CustomButtonGreen>Browse Jobs</CustomButtonGreen></button>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-gray-800 py-10 px-2 md:px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <input
            type="text"
            ref={searchref}
            placeholder="Search Job by title"
            className="w-full p-2 md:p-4 text-gray-700 rounded-l-lg ml-4 focus:outline-none"
          />
          <button onClick={()=>{navigate(`/user/jobs/${searchref?.current?.value}`)}} className="bg-blue-600 hover:bg-blue-700 text-white p-2 md:p-4 rounded-r-lg">Search</button>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#424e61] shadow-[inset_10px_10px_10px_-1px_#313c4d,inset_-10px_-10px_10px_-1px_#697992] p-8 rounded-lg ">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 text-blue-400">One-Click Applications</h3>
              <p className='text-emerald-500 text-xs sm:text-lg'>Apply to jobs with just one click, saving you time and effort.</p>
            </div>
            <div className="bg-[#424e61] shadow-[inset_10px_10px_10px_-1px_#313c4d,inset_-10px_-10px_10px_-1px_#697992] p-8 rounded-lg ">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 text-blue-400">Resume Builder</h3>
              <p className='text-emerald-500 text-xs sm:text-lg'>Create a professional resume in minutes with our easy-to-use tool.</p>
            </div>
            <div className="bg-[#424e61] shadow-[inset_10px_10px_10px_-1px_#313c4d,inset_-10px_-10px_10px_-1px_#697992] p-8 rounded-lg ">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 text-blue-400">Track Your Applications</h3>
              <p className='text-emerald-500 text-xs sm:text-lg'>Keep track of all your job applications in one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Popular Job Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div onClick={()=>{navigate(`/user/jobs/SDE`)}} className="bg-[#3cc56e] shadow-[inset_-5px_-5px_5px_-1px_#54f08d,inset_5px_5px_5px_-1px_#238346] text-slate-700 font-semibold font-serif p-3 md:p-6 rounded-lg ">Software Engineering</div>
            <div onClick={()=>{navigate(`/user/jobs/dataScience`)}} className="bg-[#3cc56e] shadow-[inset_-5px_-5px_5px_-1px_#54f08d,inset_5px_5px_5px_-1px_#238346] text-slate-700 font-semibold font-serif p-3 md:p-6 rounded-lg ">Data Science</div>
            <div onClick={()=>{navigate(`/user/jobs/marketing}`)}} className="bg-[#3cc56e] shadow-[inset_-5px_-5px_5px_-1px_#54f08d,inset_5px_5px_5px_-1px_#238346] text-slate-700 font-semibold font-serif p-3 md:p-6 rounded-lg ">Marketing</div>
            <div onClick={()=>{navigate(`/user/jobs/fullstack`)}} className="bg-[#3cc56e] shadow-[inset_-5px_-5px_5px_-1px_#54f08d,inset_5px_5px_5px_-1px_#238346] text-slate-700 font-semibold font-serif p-3 md:p-6 rounded-lg ">Full Stack</div>
            <div onClick={()=>{navigate(`/user/jobs/backend`)}} className="bg-[#3cc56e] shadow-[inset_-5px_-5px_5px_-1px_#54f08d,inset_5px_5px_5px_-1px_#238346] text-slate-700 font-semibold font-serif p-3 md:p-6 rounded-lg ">Backend</div>
            <div  onClick={()=>{navigate(`/user/jobs/frontend`)}} className="bg-[#3cc56e] shadow-[inset_-5px_-5px_5px_-1px_#54f08d,inset_5px_5px_5px_-1px_#238346] text-slate-700 font-semibold font-serif p-3 md:p-6 rounded-lg ">Front end</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-2 sm:px-6">
        <div className=" p-2 md:p-8 rounded-lg ">
          <h2 className= "text-lg md:text-3xl text-center font-bold mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#424e61] shadow-[inset_10px_10px_10px_-1px_#313c4d,inset_-10px_-10px_10px_-1px_#697992] p-4 md:p-8 rounded-lg ">
              <p>"I landed my dream internship in just two weeks!"</p>
              <span className="block mt-4 font-bold">- User A</span>
            </div>
            <div className="bg-[#424e61] shadow-[inset_10px_10px_10px_-1px_#313c4d,inset_-10px_-10px_10px_-1px_#697992] p-4 md:p-8 rounded-lg ">
              <p>"The one-click application feature saved me so much time!"</p>
              <span className="block mt-4 font-bold">- User B</span>
            </div>
            <div className="bg-[#424e61] shadow-[inset_10px_10px_10px_-1px_#313c4d,inset_-10px_-10px_10px_-1px_#697992] p-4 md:p-8 rounded-lg ">
              <p>"Best platform to find remote jobs!"</p>
              <span className="block mt-4 font-bold">- User C</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-4 md:py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 md:p-8 rounded-lg bg-[#3cc56e] shadow-[inset_-10px_-10px_10px_-1px_#54f08d,inset_10px_10px_10px_-1px_#238346]">
              <h3 className="text-xl font-bold mb-4 text-black">Step 1</h3>
              <p>Sign up and create your profile.</p>
            </div>
            <div className="p-4 md:p-8 rounded-lg bg-[#3cc56e] shadow-[inset_-10px_-10px_10px_-1px_#54f08d,inset_10px_10px_10px_-1px_#238346]">
              <h3 className="text-xl font-bold mb-4 text-black">Step 2</h3>
              <p>Search for jobs or internships that match your skills.</p>
            </div>
            <div className="p-4 md:p-8 rounded-lg bg-[#3cc56e] shadow-[inset_-10px_-10px_10px_-1px_#54f08d,inset_10px_10px_10px_-1px_#238346]">
              <h3 className="text-xl font-bold mb-4 text-black">Step 3</h3>
              <p>Apply with one click and track your applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-10 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <p>&copy; {new Date().getFullYear()} Rojgaar Platform. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/mahendra-pratap-verma-559b81257" className="text-blue-400">LinkedIn</a>
            <a href="https://www.instagram.com/mahendra_123.p/" className="text-blue-400">Instagram</a>
           
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
