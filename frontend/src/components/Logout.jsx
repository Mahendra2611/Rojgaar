import React, { useEffect, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import { END_POINT } from '../utils/constants';
import { removeUser } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

const Logout = () => {
    const [msg,setMsg] = useState("");
    const dispatch = useDispatch();
    const getLogOut = async()=>{
        try {
            const response = await fetch(`${END_POINT}/user/logout`, {
                method: "GET",
                credentials: "include",
        })
        
        if(response.ok){
            toast.success("user logged out successfully")
            sessionStorage.clear()
            dispatch(removeUser());
            setMsg("User logged out successfully")
            
            
        }
        else{
            setMsg("log out failed")
            toast.error("log out failed")
        }
        } 
        catch (error) {
            toast.error("log out failed")
        }
    }
    useEffect(()=>{
        getLogOut();
    },[])
  return (
    <div>
        <h1 className='text-green-500  font-serif flex justify-center items-center w-screen h-screen font-semibold md:font-extrabold text-xl md:text-5xl'>{msg}</h1>
       <ToastContainer
position="top-right"
autoClose={2000}
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
  )
}

export default Logout
