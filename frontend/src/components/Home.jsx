import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Home= () => {
  const navigate = useNavigate();
  const searchref = useRef("");
  return (

    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-200 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job or Internship</h1>
        <p className="text-lg mb-8">Create a resume in minutes and apply with one click</p>
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-4">Resume Builder</button>
          <button onClick={()=>{navigate("/user/jobs")}} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">Browse Jobs</button>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-gray-800 py-10 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <input
            type="text"
            ref={searchref}
            placeholder="Location"
            className="w-full p-4 text-gray-700 rounded-l-lg ml-4 focus:outline-none"
          />
          <button onClick={()=>{navigate(`/user/jobs/${searchref?.current?.value}`)}} className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-r-lg">Search</button>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">One-Click Applications</h3>
              <p>Apply to jobs with just one click, saving you time and effort.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Resume Builder</h3>
              <p>Create a professional resume in minutes with our easy-to-use tool.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Track Your Applications</h3>
              <p>Keep track of all your job applications in one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Popular Job Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div onClick={()=>{navigate(`/user/jobs/SDE`)}} className="bg-gray-700 p-6 rounded-lg shadow-lg">Software Engineering</div>
            <div onClick={()=>{navigate(`/user/jobs/dataScience`)}} className="bg-gray-700 p-6 rounded-lg shadow-lg">Data Science</div>
            <div onClick={()=>{navigate(`/user/jobs/marketing}`)}} className="bg-gray-700 p-6 rounded-lg shadow-lg">Marketing</div>
            <div onClick={()=>{navigate(`/user/jobs/fullstack`)}} className="bg-gray-700 p-6 rounded-lg shadow-lg">Full Stack</div>
            <div onClick={()=>{navigate(`/user/jobs/backend`)}} className="bg-gray-700 p-6 rounded-lg shadow-lg">Backend</div>
            <div  onClick={()=>{navigate(`/user/jobs/frontend`)}}className="bg-gray-700 p-6 rounded-lg shadow-lg">Front end</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <p>"I landed my dream internship in just two weeks!"</p>
              <span className="block mt-4 font-bold">- User A</span>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <p>"The one-click application feature saved me so much time!"</p>
              <span className="block mt-4 font-bold">- User B</span>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <p>"Best platform to find remote jobs!"</p>
              <span className="block mt-4 font-bold">- User C</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Step 1</h3>
              <p>Sign up and create your profile.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Step 2</h3>
              <p>Search for jobs or internships that match your skills.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Step 3</h3>
              <p>Apply with one click and track your applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-10 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <p>&copy; {new Date().getFullYear()} Job Hunt Platform. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-blue-400">LinkedIn</a>
            <a href="#" className="text-blue-400">Twitter</a>
            <a href="#" className="text-blue-400">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
