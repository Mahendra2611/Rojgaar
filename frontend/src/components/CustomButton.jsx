import React from "react";

export const CustomButtonRed = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="relative border-none bg-transparent p-0 cursor-pointer outline-none focus:outline-none transition-filter duration-250 select-none"
    >
      <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-black bg-opacity-25 transform translate-y-2 transition-transform duration-[600ms] cubic-bezier-[.3,.7,.4,1] will-change-transform shadow"></span>
      <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-red-800 via-red-600 to-red-800"></span>
      <span className="relative block py-1 px-3 md:px-6 rounded-lg text-white text-xs md:text-lg font-medium bg-red-500 transform translate-y-[-4px] transition-transform duration-[600ms] cubic-bezier-[.3,.7,.4,1] will-change-transform">
        {children}
      </span>
    </button>
  );
};


export const CustomButtonBlue = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="relative border-none bg-transparent p-0 cursor-pointer outline-none focus:outline-none transition-filter duration-250 select-none"
    >
      <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-black bg-opacity-25 transform translate-y-2 transition-transform duration-[600ms] cubic-bezier-[.3,.7,.4,1] will-change-transform shadow"></span>
      <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-blue-800 via-blue-600 to-blue-800"></span>
      <span className="relative block py-1 px-5 rounded-lg text-white text-xs md:text-lg font-medium bg-blue-500 transform translate-y-[-4px] transition-transform duration-[600ms] cubic-bezier-[.3,.7,.4,1] will-change-transform">
        {children}
      </span>
    </button>
  );
};

export const CustomButtonGreen = ({ onClick, children }) => {
    return (
      <button
        onClick={onClick}
        className="relative border-none bg-transparent p-0 cursor-pointer outline-none focus:outline-none transition-filter duration-250 select-none"
      >
        <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-black bg-opacity-25 transform translate-y-2 transition-transform duration-[600ms] cubic-bezier-[.3,.7,.4,1] will-change-transform shadow"></span>
        <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-green-800 via-green-600 to-green-800"></span>
        <span className="relative block py-1 px-1 md:px-5 rounded-lg text-white text-xs md:text-lg font-medium bg-green-500 transform translate-y-[-4px] transition-transform duration-[600ms] cubic-bezier-[.3,.7,.4,1] will-change-transform">
          {children}
        </span>
      </button>
    );
  };


