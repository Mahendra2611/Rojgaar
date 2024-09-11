import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const JobCard = ({data}) => {
    const navigate= useNavigate()
  return (
    <div className="flex justify-center items-center  bg-gradient-to-br from-[#0f172a] to-[#1e293b]   ">
      <div className="w-full max-w-md p-6  border border-white/20 backdrop-blur-md bg-white/10 rounded-lg shadow-lg">
        {/* Company Logo */}
        <div className="flex items-center mb-4">
          <img
            src={data.company.logo} // Replace with your logo URL
            alt="Company Logo"
            className="w-12 h-12 rounded-full border border-gray-200"
          />
          <div className="ml-4">
            <h2 className="text-white text-xl font-bold">{data.company.name}</h2>
            <p className="text-gray-300 text-sm">{data.company.location}</p>
          </div>
        </div>

        {/* Job Details */}
        <div className="mt-4">
          <h3 className="text-white text-lg font-semibold">{data.title}</h3>
          <p className="text-gray-400 text-sm mb-2">Number of Openings: {data.position}</p>
          <p className="text-gray-400 text-sm mb-2">Salary: {data.salary}/month</p>
          <p className="text-gray-400 text-sm mb-2">{data.jobType}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-x-2 mt-6">
          <button onClick={()=>{navigate(`/user/jobs/deatils/${data._id}`)}} className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
            View Details
          </button>
          <button className="px-4 py-2 text-sm text-blue-600 bg-white/80 hover:bg-gray-100 rounded-lg">
            Save for Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
