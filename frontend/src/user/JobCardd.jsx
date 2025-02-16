import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pattern1 } from "../components/Background";
import Button from "../components/Button";
import { calculateDays } from "../utils/calculateDays";

const JobCard = ({ data, handleRemove }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = 4; // Number of skills shown initially

  return (
    
      <div className="flex justify-center items-center">
        <div className="w-[250px] sm:w-[300px] h-[350px] rounded-lg p-4 flex flex-col justify-between border border-gray-700 shadow-lg"
             style={{ backgroundColor: "#1A1B2F" }}>

          {/* Days Posted */}
          <p className="text-gray-400 text-right text-sm">{calculateDays(data.createdAt)} Days Ago</p>

          {/* Job Info */}
          <div>
            <h2 className="text-[#F8F9FA] text-xl font-bold">{data?.name}</h2>
            <p className="text-[#ADB5BD] text-sm">{data?.location}</p>
            <h3 className="text-[#F8F9FA] text-lg font-semibold mt-2">{data?.role}</h3>
            <p className="text-[#ADB5BD] text-sm">{data?.mode} | {data?.jobType}</p>
          </div>

          {/* Requirements */}
          <div className="mt-0">
            <h3 className="text-lg text-[#F8F9FA] font-semibold">Requirements</h3>
            <ul className="flex flex-wrap gap-2 md:gap-3">
              {data?.skills?.slice(0, showAll ? data?.skills.length : visibleSkills).map((req, index) => (
                <li key={index} className="border border-gray-600 py-1 px-2 text-xs rounded-xl bg-gray-800 shadow-md text-[#56CFE1]">
                  {req}
                </li>
              ))}
            </ul>

            {/* Show More Button */}
            {data?.skills?.length > visibleSkills && (
              <button onClick={() => setShowAll(!showAll)} className="mt-2 text-blue-400 text-sm underline">
                {showAll ? "Show Less" : "More"}
              </button>
            )}
          </div>

          {/* Apply & Remove Buttons */}
          <div className="flex justify-around gap-x-1 items-center mt-4">
            <Button className="bg-[#28A745] hover:bg-green-600 text-white px-4 py-2 rounded-md">
              <Link to={data.link}>Apply</Link>
            </Button>
            <Button className="bg-[#FF9F1C] hover:bg-orange-500 text-white px-4 py-2 rounded-md"
                    onClick={() => handleRemove(data?._id)}>
              Remove
            </Button>
          </div>

        </div>
      </div>
    
  );
};

export default JobCard;
