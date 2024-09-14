import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
const JobDetails = () => {
    const {id} = useParams();
    const [job,setJob] = useState({});
    const [hasApplied,sethasApplied] = useState(false);
    const user = useSelector((state)=>state?.user?.user)
    const applyJobs = async()=>{
     
      console.log(user.profile)
      if(Object.keys(user).length === 0){
        toast.error("You are not logged in")
        return;
      }
      if(user?.profile?.resume === ""){
        toast.error("Your resume is not present")
        return;
      }
      if(user?.role !== student){
        toast.error("Log in as Student to apply")
        return;
      }
        try {
            const response = await fetch(`http://localhost:3000/application/apply/${id}`,{
                method:"GET",
                credentials:"include",

            })
            const data = await response.json();
            if(data.success){
                toast.success(data.message)
                sethasApplied(true);
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getDetails = async()=>{
        try {
            const response = await fetch(`http://localhost:3000/job/get/${id}`,{
                method:"GET",
                credentials:"include",

            })
            const data = await response.json();
            console.log(data.job)
            setJob(data.job);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
       getDetails();
    },[])
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex justify-center items-center py-10">
          <div className="bg-white/10 backdrop-blur-md border border-gray-500/30 rounded-lg p-8 max-w-4xl w-full shadow-lg">
            {/* Company Info */}
            <div className="flex items-center mb-6">
              <img
                src={job?.company?.logo || "https://via.placeholder.com/100"}
                alt={job?.company?.name}
                className="w-20 h-20 rounded-full object-cover border border-gray-200"
              />
              <div className="ml-6">
                <h2 className="text-3xl text-white font-bold">{job?.company?.name}</h2>
                <p className="text-gray-300 text-lg">{job?.location}</p>
              </div>
            </div>
    
            {/* Job Title and Details */}
            <div className="mb-6">
              <h1 className="text-4xl text-white font-bold mb-4">{job?.title}</h1>
              <p className="text-gray-400 mb-4">{job?.description}</p>
            </div>
    
            {/* Requirements */}
            <div className="mb-6">
              <h3 className="text-xl text-white font-semibold mb-2">Requirements</h3>
              <ul className="list-disc list-inside text-gray-400">
                {job?.requirements?.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
    
            {/* Job Details */}
            <div className="grid grid-cols-2 gap-4 text-gray-400">
              <div>
                <p><span className="text-white font-bold">Salary: </span>{job?.salary}</p>
                <p><span className="text-white font-bold">Experience Level: </span>{job?.experienceLevel}</p>
              </div>
              <div>
                <p><span className="text-white font-bold">Job Type: </span>{job?.jobType}</p>
                <p><span className="text-white font-bold">Position: </span>{job?.position}</p>
              </div>
            </div>
    
            {/* Apply Button */}
            <div className="mt-8 flex justify-center">
             {(hasApplied||job?.applications?.length>0 )? ( <button  disabled={true} className="px-6 py-3 fa  bg-green-600 text-white rounded-lg shadow-md  transition duration-300">
                Already Applied
              </button>) :( <button onClick={applyJobs} className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Apply Now
              </button>)}
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
}

export default JobDetails
