import React from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "./PrimaryButton";
const PageCard = ({ title, path, bgColor }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`p-6 rounded-2xl shadow-lg text-white bg-teal-600  hover:scale-105 transition-transform duration-300 ease-in-out w-full max-w-[300px] min-h-[150px] flex flex-col justify-between`}
    >
      <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
      <PrimaryButton onClick={() => navigate(path)}>
        Visit {title}
      </PrimaryButton>
    </div>
  );
};




export default PageCard;
//  className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
