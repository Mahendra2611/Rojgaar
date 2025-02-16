import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pattern1 } from "../components/Background";
import Button from "../components/Button";
import { calculateDays } from "../utils/calculateDays";

const AdminJobCard = ({ data, handleSave }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = 4; // Number of skills shown initially

  return (
    
      <div className="flex justify-center items-center">
        <div className="w-[260px] sm:w-[320px] h-[380px] border border-gray-600 shadow-lg bg-[#1A1B2F] 
                        rounded-xl p-5 flex flex-col justify-between">
          
          {/* Days Posted */}
          <p className="text-gray-400 text-right text-sm">
            {calculateDays(data.createdAt)} Days Ago
          </p>

          {/* Job Info */}
          <div>
            <h2 className="text-[#F8F9FA] text-2xl font-bold">{data?.name}</h2>
            <p className="text-[#ADB5BD] text-sm">{data?.location}</p>
            <h3 className="text-[#F8F9FA] text-lg font-semibold mt-2">{data?.role}</h3>
            <p className="text-[#ADB5BD] text-sm">
              {data?.mode} | {data?.jobType}
            </p>
          </div>

          {/* Requirements */}
          <div >
            <h3 className="text-lg text-[#F8F9FA] font-semibold">Requirements</h3>
            <ul className="text-[#56CFE1] flex flex-wrap mt-1 gap-2">
              {data?.skills?.slice(0, showAll ? data?.skills.length : visibleSkills).map((req, index) => (
                <li key={index} className="border border-[#56CFE1] py-1 px-2 text-xs rounded-lg bg-[#2B2D42]">
                  {req}
                </li>
              ))}
            </ul>

            {/* Show More Button */}
            {data?.skills?.length > visibleSkills && (
              <button onClick={() => setShowAll(!showAll)} className="mt-2 text-[#4DA3FF] text-sm underline">
                {showAll ? "Show Less" : "More"}
              </button>
            )}
          </div>

          {/* Apply & Save Buttons */}
          <div className="flex justify-around gap-x-2 items-center mt-4">
            <Button className="bg-[#28A745] hover:bg-[#218838] text-white">
              <Link to={data.link}>Apply</Link>
            </Button>
            <Button onClick={() => handleSave(data?._id)} className="bg-[#FF9F1C] hover:bg-[#E08E00] text-white">
              Save for Later
            </Button>
          </div>

        </div>
      </div>
    
  );
};

export default AdminJobCard;
