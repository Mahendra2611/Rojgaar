import React from 'react';
import { useSelector } from 'react-redux';
import Job from './Job';
import Companies from './Companies';
import CallApi from './CallApi';
import { useNavigate } from 'react-router-dom';
const RecruiterLandingPage = () => {
    const user = useSelector((state)=>state.user.user)
    const jobs = useSelector((state)=>state.job.job)
    const company = useSelector((state)=>state.company.company)
    let application = 0;
    let accept = 0;
    let reject = 0;
    let pending = 0;
     jobs.map((job)=>{
      application = application+job.applications.length
      job.applications.map((application)=>{
        if(application?.status === "accepted"){
          accept = accept+1;
        }
        else if(application?.status === "pending"){
          pending= pending+1;
        }
        else if(application?.status === "rejected"){
          reject = reject+1;
        }
      })
     })
    //console.log(application)
    //console.log(jobs)
    const handleClick = ()=>{
      navigate("/job/create")
      }
      const handleClick2 = ()=>{
        navigate("/company/create")
        }
      const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-6 text-white">
      {/* Header / Welcome Section */}
      <header className="mb-6">
        <h1 className="text-2xl md:text-4xl font-bold">Welcome back, <span className='text-red-600'>{user.fullName}</span></h1>
        <p className="text-sm md:text-base text-gray-400">Here’s a quick overview of your activities.</p>
      </header>
      <div className='hidden'>{jobs.length===0 && <CallApi/>}</div>
      {/* Quick Stats */}
      <section className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-[#213155] p-2 md:p-4 rounded-lg">
          <h2 className="text-[14px] md:text-lg font-semibold text-lime-400">Jobs Posted</h2>
          <p className="text-lg md:text-3xl font-bold text-lime-400">{jobs?.length}</p>
        </div>
        <div className="bg-[#213155] p-2 md:p-4 rounded-lg">
          <h2 className="text-[14px] md:text-lgfont-semibold text-fuchsia-600">Applications Received</h2>
          <p className="text-lg md:text-3xl font-bold text-fuchsia-600">{application}</p>
        </div>
        <div className="bg-[#213155] p-2 md:p-4 rounded-lg">
          <h2 className="text-[14px] md:text-lg font-semibold text-green-600 ">Accepted Applications</h2>
          <p className="text-lg md:text-3xl font-bold text-green-600">{accept}</p>
        </div>
        <div className="bg-[#213155] p-2 md:p-4 rounded-lg">
          <h2 className="text-[14px] md:text-lg font-semibold text-red-500">Rejected Applications</h2>
          <p className="text-lg md:text-3xl font-bold text-red-500">{reject}</p>
        </div>
        <div className="bg-[#213155] p-2 md:p-4 rounded-lg">
          <h2 className="text-[14px] md:text-lg font-semibold  text-yellow-500">Pending Applications</h2>
          <p className="text-lg md:text-3xl font-bold text-yellow-500">{pending}</p>
        </div>
      </section>

      {/* Job Management */}
      <section className="mb-6">
        <div className="flex justify-between items-center">
          <h2 className="ttext-[16px] md:text-xl font-semibold">Recent Job Postings</h2>
          <button onClick={handleClick} className="bg-blue-500 text-[16px] md:text-xl hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Create New Job</button>
        </div>
        <div className="bg-[#213155] p-4 mt-4 rounded-lg">
          {/* Example Job List */}
          <div className="flex justify-between items-center border-b border-gray-600 pb-2 mb-2">
            <div>
              <h3 className="text-lg font-semibold">{jobs[0]?.title}</h3>
              <p className="text-sm text-gray-400">{jobs[0]?.createdAt.split("T")[0]}</p>
            </div>
            <div className="flex space-x-2 flex-wrap justify-center gap-2">
              <button onClick={()=>{navigate(`/job/update/0`)}} className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-lg text-sm">Edit</button>
              <button  onClick={()=>{navigate(`/job`)}} className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg text-sm">View More ..</button>
            </div>
          </div>
          {/* Repeat for other jobs */}
        </div>
      </section>

      

      {/* Company Management */}
      <section className="mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-[16px] md:text-xl font-semibold">Manage Your Companies</h2>
          <button onClick={handleClick2} className="bg-blue-500 hover:bg-blue-600 text-[16px] md:text-xl  text-white px-4 py-2 rounded-lg">Create New Company</button>
        </div>
        <div className="bg-[#213155] p-4 mt-4 rounded-lg">
          {/* Example Company List */}
          <div className="flex justify-between items-center border-b border-gray-600 pb-2 mb-2">
            <div>
              <h3 className="text-lg font-semibold">{company[0]?.name}</h3>
              <p className="text-sm text-gray-400">Active</p>
            </div>
            <div className="flex space-x-2">
              <button  onClick={()=>{navigate(`/company`)}} className="bg-red-500 hover:bg-green-600 text-white px-2 py-1 rounded-lg text-sm">View More..</button>
            </div>
          </div>
          {/* Repeat for other companies */}
        </div>
      </section>

      
     
    </div>
  );
};

export default RecruiterLandingPage;
