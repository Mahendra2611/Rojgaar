import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Pattern1 } from './Background';
import Button from './Button';
import Loader from './Loader';
import { END_POINT } from '../utils/constants';
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const UpdatePwd = () => {
    const pwdRef = useRef(null);
    const [load,setLoad] = useState(false);
    const navigate = useNavigate();
    const updatePassword = async()=>{
        const pwd = pwdRef?.current?.value||"";
        ///^.{8,}$/;
        if(!(/^.{8,}$/.test(pwd))){
            toast("Password should be atleast 8 length")
            return;
        }
        const formData = {
            "pwd":pwd,
        }
        console.log(formData)
    try {
      setLoad(true);
      const response = await fetch(`${END_POINT}/forgotPwd/updatePwd`, {
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
            navigate("/signin")
        }
        toast(data.message)
        console.log(data.message)
      } else {
        toast.error(data.message)
        console.log("password couldn't be sent updated");
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
        <h1 className='text-white mb-3 text-lg font-semibold'>Enter the new Password</h1>
      <input type="password" ref={pwdRef} placeholder="Password" name="text" className="input" />
      <p className='text-red-400 mt-2 text-xs'>* password should be atleast 8 length </p>
      <Button onClick={updatePassword} >Update Password</Button>
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
  .input {
    --input-focus: #2d8cf0;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --main-color: #323232;
    width: 200px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color);
    padding: 5px 10px;
    outline: none;
  }

  .input::placeholder {
    color: var(--font-color-sub);
    opacity: 0.8;
  }

  .input:focus {
    border: 2px solid var(--input-focus);
  }`;

export default UpdatePwd;
