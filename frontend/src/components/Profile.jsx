import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';
import JobAppliedTable from './JobAppliedTable';


const Profile = () => {
  const user = useSelector((state)=>state.user.user)
  const [jobsData,setJobsData] = useState()
  const [loged,setLoged]= useState(true);
  //console.log(user)
  // const user = {
  //   photo: 'https://via.placeholder.com/150', // Placeholder image; replace with actual image URL
  //   name: 'John Doe',
  //   role: 'Software Engineer',
  //   email: 'john.doe@example.com',
  //   phone: '+1234567890',
  //   skills: ['JavaScript', 'React', 'Node.js', 'Tailwind CSS'],
  //   resume: '/path/to/resume.pdf', // Replace with the actual path to the resume PDF
  // };
const navigate = useNavigate();
const handleEdit = ()=>{
   if(Object.keys(user).length === 0){
    toast.error("You are not logged in")
   }
   else{
    navigate("/editprofile")
   }
    
}
const getJobsApplied = async()=>{
  try {
    const response = await fetch("http://localhost:3000/application/get",{
      method:"GET",
      credentials:"include"
    })
    const data  = await response.json();
   // console.log(data)
   if(response.ok){
    setJobsData(data.application)
   }
   else{
    toast.error(data.message)
    //console.log(data.message)
   }
  } catch (error) {
   // console.log(error)
    toast.error("Something went wrong")
  }
  }
  useEffect(()=>{
    getJobsApplied();
  },[])
  return  (
   <div className='mx-2'>
     <div
      className="p-6 max-w-4xl mx-auto rounded-lg  bg-[#62c48e] shadow-[inset_10px_10px_10px_-1px_#418d63,inset_-10px_-10px_10px_-1px_#8af1b9]">
      <div className="flex justify-end">
        <button onClick={handleEdit} className="text-white bg-[#3968ad] shadow-[inset_5px_5px_5px_-1px_#264d88,inset_-5px_-5px_5px_-1px_#5c88ca rounded-xl py-1 md:py-2 px-2 md:px-4">
          Edit
        </button>
      </div>
      <div className="text-center ">
        <img
          className="w-20 h-20 md:w-32 md:h-32 mx-auto rounded-full"
          src={user?.profile?.profilePhoto}
          alt="U"
        />
        <h2 className="text-xl md:text-2xl font-bold pb-1 mt-4">{user?.fullName}</h2>
        <p className="text-gray-700 pb-1">{user?.role}</p>
        <p className="text-gray-700 pb-1">{user?.email}</p>
        <p className="text-gray-700">{user?.phoneNumber}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg md:text-xl font-semibold">Skills</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {user?.profile?.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs md:text-lg bg-blue-100 text-blue-800 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg md:text-xl font-semibold">Resume</h3>
        <a
          href={user?.profile?.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-800 text-xl md:text-xl hover:underline"
        >
         { user?.profile?.resumeOriginalName}
        </a>
      </div>
    </div>
    <div className=' max-w-4xl mx-auto rounded-lg shadow-lg mt-10'>
<JobAppliedTable job={jobsData}/>
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
};

export default Profile;
