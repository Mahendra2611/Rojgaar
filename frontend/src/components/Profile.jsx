import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import JobAppliedTable from './JobAppliedTable';
const Profile = () => {
  const user = useSelector((state)=>state.user.user)
  const [jobsData,setJobsData] = useState([]);
  console.log(user)
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
    navigate("/editprofile")
}
const getJobsApplied = async()=>{
try {
  const response = await fetch("http://localhost:3000/application/get",{
    method:"GET",
    credentials:"include"
  })
  const data  =await response.json();
  console.log(data);
  setJobsData(data.application)
} catch (error) {
  console.log(error)
}
}
useEffect(()=>{
  getJobsApplied();
},[])
  return (
   <div>
     <div
      className="p-6 max-w-4xl mx-auto rounded-lg shadow-lg"
      style={{ background: 'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)' }}
    >
      <div className="flex justify-end">
        <button onClick={handleEdit} className="text-white bg-blue-500 hover:bg-blue-600 rounded-full p-2">
          Edit
        </button>
      </div>
      <div className="text-center ">
        <img
          className="w-32 h-32 mx-auto rounded-full"
          src={user?.profile?.profilePhoto}
          alt="U"
        />
        <h2 className="text-2xl font-bold pb-1 mt-4">{user?.fullName}</h2>
        <p className="text-gray-700 pb-1">{user?.role}</p>
        <p className="text-gray-700 pb-1">{user?.email}</p>
        <p className="text-gray-700">{user?.phoneNumber}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Skills</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {user?.profile?.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Resume</h3>
        <a
          href={user?.profile?.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
         { user?.profile?.resumeOriginalName}
        </a>
      </div>
    </div>
    <div className=' max-w-4xl mx-auto rounded-lg shadow-lg mt-10'>
<JobAppliedTable job={jobsData}/>
    </div>
   </div>
  );
};

export default Profile;
