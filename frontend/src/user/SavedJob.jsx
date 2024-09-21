import React, { useEffect, useState } from 'react'
import JobCard from './JobCardd';
import { handleRemovee } from './APIreq';
import { useSelector } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';
import { END_POINT } from '../utils/constants';
const SavedJob = () => {
    const [job,setJob] = useState([]);
    const jobs = useSelector((state)=>state.job.job)
    const intern = useSelector((state)=>state.intern.intern)
   //console.log(job)
    //console.log(jobs)
    const filterData1 = jobs?.filter((jobs)=>job.includes(jobs._id))
    const filterData2 = intern?.filter((intern)=>job.includes(intern._id))
    //console.log(filterData1)
    const filterData = [...filterData1,...filterData2]
    //console.log(filterData)
    const handleRemove = async(jobId)=>{
       const result =  await handleRemovee(jobId);
       //console.log(result)
       if(result){
        toast.success("Job Removed Successfully")
        getSaved();
       }
       else{
        toast.error("Job could not be removed")
       }
        }
    const getSaved = async()=>{
        try {
            const response =  await fetch(`${END_POINT}/savelater/get`,{
              method:"GET",
              credentials:"include",
             })
             const data  = await response.json();
             
             if(response.ok){
               // console.log(data?.savedJob?.savedJob)
                setJob(data.savedJob.savedJob)
             }
             else{
                toast.error(data.message)
             }
            // console.log(data.message)
            
          } catch (error) {
            toast.error("Something went wrong")
           // console.log(error)
          }
    }
    useEffect(()=>{
        getSaved();
    },[])
  return job.length===0?(<h1 className='text-white flex justify-center items-center text-xl md:text-5xl font-bold'>No Job saved</h1>):(
    <div className='space-y-5 m-auto'>
    <div className='flex justify-center items-center px-10 text-black'>
       
      </div>
      <div className='flex px-5 flex-wrap justify-center items-center gap-10'>
    
     {(filterData?.length>0) && (filterData.map((job,index)=>(
        <JobCard key={index} data={job} handleRemove={handleRemove}/>
     )))}
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
  )
}

export default SavedJob
