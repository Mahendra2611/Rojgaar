import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { calculateDays } from "../utils/calculateDays";
import {Pattern3,Pattern1} from "../components/Background";
import Button from "../components/Button";
const JobCard = ({data,handleSave}) => {
    const navigate= useNavigate()
  return (
    <Pattern1>
    <div className="flex justify-center items-center    ">
      <div className="w-full max-w-md p-6  border border-white/20    shadow-[inset_10px_10px_10px_-1px_#4d4e4e,inset_-10px_-10px_10px_-1px_#1f2020] rounded-lg ">
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
          <Button onClick={()=>{navigate(`/user/jobs/deatils/${data?._id}`)}}>
            View Details
          </Button>
          <Button onClick={()=>{handleSave(data?._id)}} >
            Save for Later
          </Button>
        </div>
      </div>
    </div>
    </Pattern1>
  );
};

export default JobCard;
