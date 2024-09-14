import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify';

const ApplicantTable = () => {
    const {jobId} = useParams();
    const [job,setJob] = useState([])
    const handleClick = async(e,id)=>{
        console.log(e)
        console.log(id)
        let val = e.target.innerHTML;
        console.log(val)
        if(val === 'Accept'){
            val = "accepted"
        }
        else{
            val = "rejected"
        }
        console.log(val)
        try {
            const response = await fetch(`http://localhost:3000/application/status/${id}/update`,{
                method:"POST",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({status:val})
            })
            const data = await response.json();
            console.log(data);
            toast(data.message)
          
        } 
        catch (error) {
            console.log(error)
        }
    }
    const getApplicants = async()=>{
        try {
            const response = await fetch(`http://localhost:3000/application/${jobId}/applicants`,{
                method:"GET",
                credentials:"include"
            })
            const data = await response.json();
            console.log(data.job.applications);
            setJob(data.job.applications)
        } 
        catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getApplicants();
    },[])
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
            <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Phone No</th>
                <th scope="col" className="px-6 py-3">Resume</th>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {job.length>0 &&  job?.map((job, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-blue-500 border-b border-blue-400' : 'bg-blue-600 border-b border-blue-400'}>
                  <td className="px-6 py-4">{job?.applicant?.fullName}</td>
                  <td className="px-6 py-4">{job?.applicant?.email}</td>
                  <td className="px-6 py-4">{job?.applicant?.phoneNumber}</td>
                  <td className="px-6 py-4"><a href={job?.applicant?.profile?.resume}>{job?.applicant?.profile?.resumeOriginalName}</a></td>
                  <td className="px-0 md:px-6 py-4">{ job?.createdAt?.split('T')[0] }</td>
                 
                  <td className="px-4 py-4 space-y-1 md:space-x-4">
                   {job.status === 'pending'?(<div> <button onClick={(e)=>{handleClick(e,job._id)}} className="font-medium bg-green-400 px-2 py-1 rounded-lg  hover:underline">
                     Accept
                    </button>
                    <button onClick={(e)=>{handleClick(e,job._id)}} className="font-medium bg-red-600 px-2 py-1 rounded-lg hover:underline">
                     Reject
                    </button></div>):(<div> <button  className="font-medium bg-orange-400 text-slate-800 px-2 py-1 rounded-lg  hover:underline">
                     {job.status}
                    </button>
                    </div>) }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ToastContainer
position="top-right"
autoClose={4000}
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

export default ApplicantTable
