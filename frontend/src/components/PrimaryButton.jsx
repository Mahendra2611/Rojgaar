import React from 'react';
import styled from 'styled-components';
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
  