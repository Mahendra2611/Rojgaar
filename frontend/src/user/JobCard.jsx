import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { calculateDays } from "../utils/calculateDays";
const JobCard = ({data}) => {
    const navigate= useNavigate()
  return (
    <div className="flex justify-center items-center  bg-[#1e293b]   ">
      
      <div className="w-full max-w-md p-6  border border-white/20   bg-[#1e293b] shadow-[inset_10px_10px_10px_-1px_#32435f,inset_-10px_-10px_10px_-1px_#131c2b] rounded-lg ">
        {/* Company Logo */}
        <h1 className="text-white pb-2 -pt-2">{`${calculateDays(data?.createdAt)} days ago`}</h1>
        <div className="flex items-center mb-4">
          <img
            src={data?.company?.logo} // Replace with your logo URL
            alt="Company Logo"
            className="w-12 h-12 rounded-full border border-gray-200"
          />
          <div className="ml-4">
            <h2 className="text-white text-xl font-bold">{data?.company?.name}</h2>
            <p className="text-gray-300 text-sm">{data?.location}</p>
          </div>
        </div>

        {/* Job Details */}
        <div className="mt-4">
          <h3 className="text-white text-lg font-semibold">{data?.title}</h3>
          <p className="text-gray-400 text-sm mb-2">Number of Openings: {data?.position}</p>
          <p className="text-gray-400 text-sm mb-2">Salary: {data?.salary}/month</p>
          <p className="text-gray-400 text-sm mb-2">{data?.jobType}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-x-2 mt-6">
          <button onClick={()=>{navigate(`/user/jobs/deatils/${data?._id}`)}} className="px-4 py-2 text-sm text-white bg-[#3474b1] shadow-[inset_5px_5px_5px_-1px_#22588a,inset_-5px_-5px_5px_-1px_#4b91d3] hover:bg-blue-700 rounded-lg">
            View Details
          </button>
          <button className="px-4 py-2 text-sm text-blue-600 bg-[#d0d3d8] shadow-[inset_5px_5px_5px_-1px_#a9adb4,inset_-5px_-5px_5px_-1px_#e6e8eb] hover:bg-gray-100 rounded-lg">
            Save for Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
