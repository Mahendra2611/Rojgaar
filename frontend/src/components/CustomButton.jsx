import React from "react";
import styled from "styled-components";

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

 

export const Button = ({children}) => {
  return (
    <StyledWrapper>
      <button>{children}</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
  min-height: 45px;
  min-width: 110px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  position: relative;
  cursor: pointer;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(-12.74%, rgba(110, 239, 255, 0.5)),
    color-stop(56.76%, rgba(106, 224, 255, 0.271))
  );
  background: linear-gradient(
    90deg,
    rgba(110, 239, 255, 0.5) -12.74%,
    rgba(106, 224, 255, 0.271) 56.76%
  );
  border: 2px solid #acf7ff;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  
}

button:before {
  content: "";
  width: 4px;
  height: 28px;
  background: #19173b;
  border: 2px solid #acf7ff;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  position: absolute;
  border-top: 0;
  border-left: 0;
  border-bottom: 0;
  bottom: -7px;
  left: 4px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

button:after {
  content: "";
  position: absolute;
  left: -2px;
  bottom: -2px;
  border-top: 15px solid transparent;
  border-left: 15px solid #fffcf7;
}

`;

export default Button;


