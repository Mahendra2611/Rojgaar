import React from 'react';
import styled from 'styled-components';

export const Button = ({children,onClick}) => {
    return (
      <StyledWrapper>
        <button onClick={onClick}>{children}</button>
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
    font-size: 16px;
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
 
  export const PrimaryButton = ({children,onClick}) => {
    return (
      <PrimaryButtonStyle>
        <button onClick={onClick}>{children}</button>
      </PrimaryButtonStyle>
    );
  }
   
  const PrimaryButtonStyle = styled.button`
  background: #e63956;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #c72e4b;
  }
`;
  
  export default Button;
  
  
  