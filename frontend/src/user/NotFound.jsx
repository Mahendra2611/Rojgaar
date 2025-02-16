import React from "react";
import { SearchX } from "lucide-react"; // Importing an icon

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center -mt-28 items-center w-screen h-screen relative overflow-hidden">
      {/* Animated background gradient effect */}
      <div className="absolute inset-0 opacity-60 blur-3xl"></div>

      {/* Floating glowing particles */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-rose-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Icon + Main Text */}
      <div className="flex flex-col items-center text-white relative z-10">
        {/* Icon */}
        <SearchX className="w-16 h-16 text-rose-500 animate-bounce mb-4" />
        
        {/* Text with Emoji */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold font-serif text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-red-500 animate-pulse">
            No Match Found 🔍❌
          </span>
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
