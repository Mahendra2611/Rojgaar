import React from "react";
import styled from "styled-components";

export const Pattern1 = ({children}) => {
  return (
    <StyledWrapper1>
      <div className="container">{children}</div>
    </StyledWrapper1>
  );
};

const StyledWrapper1 = styled.div`
  .container {
  max-width: 100%;
  height: 100%;
  --s: 200px; /* control the size */
  --c1: #1d1d1d;
  --c2: #4e4f51;
  --c3: #3c3c3c;

  background: repeating-conic-gradient(
        from 30deg,
        #0000 0 120deg,
        var(--c3) 0 180deg
      )
      calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
    repeating-conic-gradient(
      from 30deg,
      var(--c1) 0 60deg,
      var(--c2) 0 120deg,
      var(--c3) 0 180deg
    );
  background-size: var(--s) calc(var(--s) * 0.577);
}

`;


export const Pattern2 = ({children}) => {
  return (
    <StyledWrapper2>
      <div className="container">{children}</div>
    </StyledWrapper2>
  );
};

const StyledWrapper2 = styled.div`
  .container {
  width: 100%;
  height: 100%;
  /* Add your background pattern here */
  --color: rgb(255, 50, 50, 0.8);
  background-color: rgb(0, 0, 0);
  background-size: 40px 40px;
  background-image: linear-gradient(45deg, var(--color), transparent 40%),
    linear-gradient(-90deg, var(--color), transparent 20%);
}

`;


export const Pattern3 = ({children}) => {
  return (
    <StyledWrapper3>
      <div className="container" >{children}</div>
    </StyledWrapper3>
  );
}

const StyledWrapper3 = styled.div`
  .container {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      #3498db,
      #2ecc71
    ); /* Gradient background */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for depth */
    border-radius: 10px; /* Rounded corners */
    position: relative;
    overflow: hidden;
  }

  .container::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none; /* Allow clicking through the pattern layer */
  }`;


  
 

 
 export const Pattern4 = ({children}) => {
   return (
     <StyledWrapper4>
       <div className="container" >{children}</div>
     </StyledWrapper4>
   );
 }
 
 const StyledWrapper4 = styled.div`
   .container {
     width: 100%;
     height: 100%;
     background: radial-gradient(
           circle farthest-side at 0% 50%,
           #282828 23.5%,
           rgba(255, 170, 0, 0) 0
         )
         21px 30px,
       radial-gradient(
           circle farthest-side at 0% 50%,
           #2c3539 24%,
           rgba(240, 166, 17, 0) 0
         )
         19px 30px,
       linear-gradient(
           #282828 14%,
           rgba(240, 166, 17, 0) 0,
           rgba(240, 166, 17, 0) 85%,
           #282828 0
         )
         0 0,
       linear-gradient(
           150deg,
           #282828 24%,
           #2c3539 0,
           #2c3539 26%,
           rgba(240, 166, 17, 0) 0,
           rgba(240, 166, 17, 0) 74%,
           #2c3539 0,
           #2c3539 76%,
           #282828 0
         )
         0 0,
       linear-gradient(
           30deg,
           #282828 24%,
           #2c3539 0,
           #2c3539 26%,
           rgba(240, 166, 17, 0) 0,
           rgba(240, 166, 17, 0) 74%,
           #2c3539 0,
           #2c3539 76%,
           #282828 0
         )
         0 0,
       linear-gradient(90deg, #2c3539 2%, #282828 0, #282828 98%, #2c3539 0%) 0 0
         #282828;
     background-size: 40px 60px;
   }`;
  
