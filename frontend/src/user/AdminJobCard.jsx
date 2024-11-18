import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { calculateDays } from "../utils/calculateDays";
import { Link } from "react-router-dom";
import {Pattern3,Pattern1} from "../components/Background";
import Button from "../components/Button";
const AdminJobCard = ({data,handleSave}) => {
   
  return (
    <Pattern1>
    <div className="flex justify-center items-center     ">
      <div className="w-full max-w-md p-6  border border-white/20    shadow-[inset_10px_10px_10px_-1px_#4d4e4e,inset_-10px_-10px_10px_-1px_#1f2020] rounded-lg ">
        {/* Company Logo */}
        <p className="text-white text-right">{calculateDays(data.createdAt)} Days</p>
        <div className="flex items-center mb-4">
          <div className="ml-4">
            <h2 className="text-white text-xl font-bold">{data?.name}</h2>
            <p className="text-gray-300 text-sm">{data?.location}</p>
          </div>
        </div>

        {/* Job Details */}
        <div className="mt-4">
          <h3 className="text-white text-lg font-semibold">{data?.role}</h3>
          <p className="text-white text-lg mb-2"> {data?.mode}</p>
          <p className="text-white text-lg mb-2">{data?.jobType}</p>
        </div>
        <div className="mb-6">
              <h3 className=" text-lg md:text-xl text-white font-semibold mb-2">Requirements</h3>
              <ul className=" text-orange-300 flex flex-wrap gap-2 md:gap-5">
                {data?.skills?.map((req, index) => (
                  <li key={index} className='border-2 border-white/20 py-1 text-xs md:text-sm md:py-1 px-2 md:px-2 rounded-xl bg-[#1e293b] shadow-[inset_5px_5px_5px_-1px_#32435f,inset_-5px_-5px_5px_-1px_#131c2b] ' >{req}</li>
                ))}
              </ul>
            </div>
        {/* Buttons */}
        <div className="flex justify-center items-center gap-x-2 mt-6">
        <Button>
<Link to={data.link}> Apply</Link>
</Button>
{/* <Button onClick={()=>{handleSave(data?._id)}} >
 Save for Later
</Button> */}
        </div>
      </div>
    </div>
    </Pattern1>
  );
};

export default AdminJobCard;

