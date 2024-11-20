import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Pattern1 } from './Background';
import { ToastContainer,toast } from 'react-toastify';
import Loader from './Loader';
import { END_POINT } from '../utils/constants';
import { Navigate, useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
    const [load,setLoad] = useState(false);
    const [email,setEmail] = useState("");
    const navigate = useNavigate();
console.log(email)
    const handleSubmit = async()=>{
       
        console.log("handle submit called")
        const formData = {
            "email":email||"",
            "resend":false,
        }
        console.log(formData)
    try {
      setLoad(true);
      const response = await fetch(`${END_POINT}/forgotPwd/checkEmail`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
        
      });
      const data = await response.json();
      // console.log(object)
      
      if (response.ok) {
       console.log(data)
        if(data.success){
            navigate("/OTP_Verfication")
        }
        toast(data.message)
        console.log(data.message)
      } else {
        toast.error(data.message)
        console.log("Data couldn't be sent successfully");
      }
    } catch (error) {
      toast.error("Something went wrong")
    console.log(error);
    }
    finally {
      setLoad(false);
    }
    }
  return load?<Loader/>:(
    <Pattern1>
   <div className='min-h-screen flex justify-center items-center  '>
   <StyledWrapper>
      <div className="form-container md:min-w-[500px]">
        <div className="logo-container">
          Forgot Password
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label >Email</label>
            <input type="text" onChange={(e)=>{setEmail(e.target.value)}} id="email" name="email" placeholder="Enter your email" required />
          </div>
          
        </form>
        <button className='bg-green-400 py-2 w-auto'  onClick={handleSubmit}>Send Email</button>
        <p className="signup-link">
          Don't have an account?
          <a href="/signup" className="signup-link link"> Sign up now</a>
        </p>
      </div>
    </StyledWrapper>
    <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
   </div>
    </Pattern1>
  );
}

const StyledWrapper = styled.div`
  .form-container {
    max-width: 400px;
    background-color: #fff;
    padding: 22px 14px;
    font-size: 14px;
    font-family: inherit;
    color: #212121;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .logo-container {
    text-align: center;
    font-weight: 600;
    font-size: 18px;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 6px;
    font-family: inherit;
    border: 1px solid #ccc;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: #1778f2;
  }

  .form-container .form-submit-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    color: #fff;
    background-color: #212121;
    border: none;
    width: 100%;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin: 12px 0;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
  }

  .form-container .form-submit-btn:hover {
    background-color: #313131;
  }

  .form-container .link {
    color: #1778f2;
    text-decoration: none;
  }

  .form-container .signup-link {
    align-self: center;
    font-weight: 500;
  }

  .form-container .signup-link .link {
    font-weight: 400;
  }

  .form-container .link:hover {
    text-decoration: underline;
  }`;

export default ForgotPassword;
