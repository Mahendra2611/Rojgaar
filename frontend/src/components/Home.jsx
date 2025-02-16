import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButtonBlue, CustomButtonGreen } from './CustomButton';
import { Link } from 'react-router-dom';
import { Pattern1 } from './Background';
import Button from './CustomButton';
import Card from './Card';
import PageCard from './PageCard';
import SocialMedia from './SocialMedia';
const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const sectionRef = useRef("");
  const [show, setShow] = useState(false);
  const option = ["frontend", "backend", "data scientist", "full stack", "java"];
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(show)
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        setShow(false); // Hide options when clicked outside
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Pattern1>
      <div className=" text-gray-200 min-h-screen w-[100vw]">
        {/* Hero Section */}

        <section className="py-5 text-center text-[#e3b341]">
          <h1 className="text-2xl  md:text-4xl font-bold mb-4">Find Your Dream Job or Internship</h1>
          <p className="text-lg mb-8 text-[#d4a5f3]">Create a resume in minutes and apply with one click</p>
          {/* <div className='flex gap-2 md:gap-10 justify-center items-center sm:flex-nowrap px-2'>
          <Button ><Link to="/user/resume" className='px-1' >Resume Builder</Link></Button>
           <Button><Link to="/user/jobs" className='px-1'>Browse Jobs</Link></Button>
           
        </div> */}
        </section>


        {/* Search Bar */}
        <section ref={sectionRef} className=" py-3  px-2 md:px-6 flex flex-col justify-center items-center gap-5">
          <div className="max-w-4xl mx-auto  flex justify-between  items-center">
            <input
              type="text"
              onChange={(e) => { setSearch(e.target.value) }}
              onFocus={() => { setShow(true) }}
              // onBlur={()=>{if(show){setShow(false)}}}
              placeholder="Search Job by title"
              value={search}
              className="w-full p-2 md:p-4 bg-[#1E293B] text-[#FFFFFF] placeholder:text-[#FFFFFF]  rounded-l-lg ml-4 focus:outline-none"
            />
            <button onClick={() => { navigate(`/user/jobs/${search}`) }} className="bg-[#e63956] hover:bg-[#851f30] text-white p-2 md:p-4 rounded-r-lg">Search</button>
          </div>


          {/* Requirements */}
          <div className={`${!show ? `hidden` : `flex`}`}>

            <ul className=" text-orange-300 flex flex-wrap gap-2 md:gap-5">
              {option.map((req, index) => (
                <li onClick={() => { setSearch(req) }} key={index} className='border-2 border-white/20 py-1 text-[14px] md:text-lg md:py-2 px-2 md:px-4 rounded-xl bg-[#1e293b] shadow-[inset_5px_5px_5px_-1px_#32435f,inset_-5px_-5px_5px_-1px_#131c2b] ' >{req}</li>
              ))}
            </ul>
          </div>
        </section>
        {/* Card */}
        <div className="flex flex-wrap justify-center w-full gap-6 p-6 ">
  <PageCard title="Jobs" path="/user/jobs" bgColor="bg-gradient-to-br from-blue-600 to-indigo-700" />
  <PageCard title="Internship" path="/user/intern" bgColor="bg-gradient-to-br from-green-500 to-teal-600" />
  <PageCard title="Resume" path="/user/resume" bgColor="bg-gradient-to-br from-purple-600 to-pink-600" />
</div>



        {/* Key Features */}
        <section className="py-5 sm:py-10 px-2">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl text-[#e3b341] sm:text-3xl font-bold mb-2">Why Choose Us?</h2>

            <div className="relative w-full max-w-4xl">
              <div className="flex overflow-x-auto space-x-5 p-4 lg:scrollbar-hide snap-x snap-mandatory">
                <Card heading="One-Click Applications" text="Apply to jobs with just one click, saving you time and effort." className="min-w-[80%] md:min-w-[40%] snap-center" />
                <Card heading="Resume Builder" text="Create a professional resume in minutes with our easy-to-use tool." className="min-w-[80%] md:min-w-[40%] snap-center" />
                <Card heading="Track Your Applications" text="Keep track of all your job applications in one place." className="min-w-[80%] md:min-w-[40%] snap-center" />
              </div>
            </div>
          </div>
        </section>





        {/* Footer */}
        <footer className=" py-2 sm:py-10 px-6 text-center">
          <div className="w-full mx-auto">
            <p>&copy; {new Date().getFullYear()} Rojgaar Platform. All Rights Reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              {/* <a href="https://www.linkedin.com/in/mahendra-pratap-verma-559b81257" className="text-blue-400">LinkedIn</a>
            <a href="https://www.instagram.com/mahendra_123.p/" className="text-blue-400">Instagram</a> */}
              <SocialMedia />
            </div>
          </div>
        </footer>
      </div>
    </Pattern1>
  );
};

export default Home;

