import React from "react";
import Signin from "./Signin";

const Popup = ({ onClose }) => {
    console.log("called")
  return (
    <div
      className="fixed inset-0 flex items-top justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
    >
     
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
        >
          ✖
        </button>
        
       

        {/* SignIn Component */}
       <div className="w-[400px] h-[300px]">
       <Signin />
       </div>
      </div>
    
  );
};

export default Popup;
