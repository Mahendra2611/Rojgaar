import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import {CustomButtonBlue,CustomButtonGreen} from "../components/CustomButton"
const JobDetails = () => {
    const {id} = useParams();
    const [job,setJob] = useState({});
    const [hasApplied,sethasApplied] = useState(false);
    const user = useSelector((state)=>state?.user?.user)
    const applyJobs = async()=>{
     
      //console.log(user.profile)
      if(Object.keys(user).length === 0){
        toast.error("You are not logged in")
        return;
      }
      if(user?.profile?.resume === ""){
        toast.error("Your resume is not present")
        return;
      }
      if(user?.role !== "student"){
        toast.error("Log in as Student to apply")
        return;
      }
        try {
            const response = await fetch(`https://rojgaar-wm0j.onrender.com/application/apply/${id}`,{
                method:"GET",
                credentials:"include",

            })
            const data = await response.json();
            if(response.ok){
                toast.success(data.message)
                sethasApplied(true);
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
          toast.error("Something went wrong")
            //console.log(error);
        }
    }
    const getDetails = async()=>{
        try {
            const response = await fetch(`https://rojgaar-wm0j.onrender.com/job/get/${id}`,{
                method:"GET",
                credentials:"include",

            })
            const data = await response.json();
            //console.log(data.job)
            if(!response.ok){
              toast.error(data.message)
            }
           else{
            setJob(data.job);
           }
        } catch (error) {
          toast.error("Deatils counldn't be fetched")
        }
    }
    useEffect(()=>{
       getDetails();
    },[])
    return (
        <div className="min-h-screen mx-3 sm:mx-0 bg-bg-[#1e293b] flex justify-center items-center py-10">
          <div className="bg-[#1e293b] shadow-[inset_10px_10px_10px_-1px_#32435f,inset_-10px_-10px_10px_-1px_#131c2b] border border-gray-500/30 rounded-lg p-8 max-w-4xl w-full ">
            {/* Company Info */}
            <div className="flex items-center mb-6">
              <img
                src={job?.company?.logo || "https://via.placeholder.com/100"}
                alt={job?.company?.name}
                className="w-20 h-20 rounded-full object-cover border border-gray-200"
              />
              <div className="ml-6">
                <h2 className="text-xl md:text-3xl text-white font-bold">{job?.company?.name}</h2>
                <p className="text-gray-300 text-xs md:text-lg">{job?.location}</p>
              </div>
            </div>
    
            {/* Job Title and Details */}
            <div className="mb-6">
              <h1 className="text-2xl md:text-4xl text-white font-bold mb-4">{job?.title}</h1>
              <p className="text-gray-400 mb-4 text-[14px] md:text-lg">{job?.description}</p>
            </div>
    
            {/* Requirements */}
            <div className="mb-6">
              <h3 className=" text-lg md:text-xl text-white font-semibold mb-2">Requirements</h3>
              <ul className=" text-orange-300 flex flex-wrap gap-2 md:gap-5">
                {job?.requirements?.map((req, index) => (
                  <li key={index} className='border-2 border-white/20 py-1 text-xs md:text-lg md:py-2 px-2 md:px-4 rounded-xl bg-[#1e293b] shadow-[inset_5px_5px_5px_-1px_#32435f,inset_-5px_-5px_5px_-1px_#131c2b] ' >{req}</li>
                ))}
              </ul>
            </div>
    
            {/* Job Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-4 text-gray-400">
              <div>
                <p><span className="text-white font-semibold md:font-bold">Salary: </span>{job?.salary}</p>
                <p><span className="text-white font-semibold md:font-bold">Experience Level: </span>{job?.experienceLevel}</p>
              </div>
              <div>
                <p><span className="text-white font-semibold md:font-bold">Job Type: </span>{job?.jobType}</p>
                <p><span className="text-white font-semibold md:font-bold">Position: </span>{job?.position}</p>
              </div>
            </div>
    
            {/* Apply Button */}
            <div className="mt-8 flex justify-center">
             {((hasApplied||job?.applications?.length>0))? ( <button  disabled={true} >
               <CustomButtonGreen> Already Applied</CustomButtonGreen>
              </button>) :( <button  >
               <CustomButtonBlue onClick={applyJobs}> Apply Now</CustomButtonBlue>
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
