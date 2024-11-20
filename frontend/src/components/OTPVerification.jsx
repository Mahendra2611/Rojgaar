import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Pattern1 } from './Background';
import Loader from './Loader';
import { ToastContainer, toast } from 'react-toastify';
import { END_POINT } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const otp = {
    first: useRef(null),
    second: useRef(null),
    third: useRef(null),
    fourth: useRef(null),
  };

  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [timer, setTimer] = useState(120); 
  const [isDisabled, setIsDisabled] = useState(true); 
  const resendOTP = async()=>{
       
    console.log("handle submit called")
    const formData = {
        "email":"",
        "resend":true,
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
 
  useEffect(() => {
    let  intervalId = null;
    if (timer > 0) {
       intervalId = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      setIsDisabled(false);
    }
    return ()=>{if(intervalId){clearInterval(intervalId)}}
  }, [timer]);

  const handleResend = () => {
    setIsDisabled(true); 
    setTimer(120);
    resendOTP();
  };

  const Verify = async () => {
    if (true) {
      console.log("handle submit called");
      console.log(
        otp.first.current.value +
          otp.second.current.value +
          otp.third.current.value +
          otp.fourth.current.value
      );
    }

    const formData = {
      otp:
        otp.first.current.value +
        otp.second.current.value +
        otp.third.current.value +
        otp.fourth.current.value,
    };
    console.log(formData);
    try {
      setLoad(true);
      const response = await fetch(`${END_POINT}/forgotPwd/verifyOTP`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        if (data.success) {
          navigate("/updatePwd");
        }
        toast(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  return load ? (
    <Loader />
  ) : (
    <Pattern1>
      <div className="min-h-screen flex justify-center items-center">
        <StyledWrapper>
          <form className="form">
            <div className="info">
              <span className="title">OTP Verification</span>
              <p className="description">
                Please enter the code we have sent you.
              </p>
            </div>
            <div className="inputs">
              <input placeholder ref={otp.first} type="tel" maxLength={1} />
              <input placeholder ref={otp.second} type="tel" maxLength={1} />
              <input placeholder ref={otp.third} type="tel" maxLength={1} />
              <input placeholder ref={otp.fourth} type="tel" maxLength={1} />
            </div>
            <a className="validate" onClick={Verify}>
              Verify
            </a>
            <p className="resend">
              You don't receive the code?{" "}
              <a
                className={`resend-action ${isDisabled ? "disabled opacity-40" : ""}`}
                onClick={isDisabled ? null : handleResend}
              >
                Resend
              </a>
              {isDisabled && (
                <span className="timer"> ({Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60})</span>
              )}
            </p>
          </form>
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
};

const StyledWrapper = styled.div`

    .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 20px;
    background: #606c88;
    background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);
    background: linear-gradient(to right, #3f4c6b, #606c88);
    border-radius: 10px;
    box-shadow: 0px 87px 78px -39px rgba(0,0,0,0.4);
    max-width: 320px;
  }

  .info {
    margin-bottom: 10px;
  }

  .title {
    color: #fff;
    font-size: 1.5rem;
    line-height: 1.8rem;
    font-weight: 800;
    letter-spacing: -0.025em;
  }

  .description {
    color: #fff;
    margin-top: 10px;
    font-size: 15px;
  }

  .form .inputs {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .form .inputs input {
    height: 2.5em;
    width: 2.5em;
    outline: none;
    text-align: center;
    font-size: 1.5em;
    color: #fff;
    border-radius: 0.3em;
    border: 1px solid rgba(253, 253, 253, 0.363);
    background-color: rgb(255 255 255 / 0.05);
  }

  .form .inputs input:focus {
    border: 1px solid rgb(99 102 241);
  }

  .resend {
    color: #fff;
    margin-top: 10px;
    font-size: 15px;
    text-align: center;
  }

  .resend-action {
    text-decoration: none;
    cursor: pointer;
    margin-left: 6px;
    color: rgb(255, 255, 255);
    font-weight: 600;
  }

  .resend-action:hover {
    text-decoration: underline #2b8af7;
  }

  .validate {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    text-decoration: none;
    background-color: #606c88;
    padding: 10px 20px;
    margin: 8px 0 0 0;
    font-size: 13px;
    font-weight: 600;
    border-radius: 10px;
    transition: .3s ease;
  }

  .validate:hover {
    background-color: #3f4c6b;
  }

  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: #3f4c6b;
    height: 30px;
    width: 30px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    cursor: pointer;
    font-weight: 600;
    transition: .3s ease;
  }

  .close:hover {
    background-color: rgba(255, 0, 0, 0.603);

  .disabled {
    color: gray;
    pointer-events: none;
  }
  
  .timer {
    color: #fff;
    font-weight: bold;
  }
`;

export default OTPVerification;
