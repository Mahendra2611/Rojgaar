import React, { useEffect } from 'react'
import { ToastContainer,toast } from 'react-toastify'
const Logout = () => {
    const getLogOut = async()=>{
        try {
            const response = await fetch("http://localhost:3000/user/logout", {
                method: "GET",
                credentials: "include",
        })
        const result= await response.json();
        if(result.success){
            toast.success("user logged out successfully")
            sessionStorage.clear()
        }
        else{
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
       <ToastContainer
position="top-right"
autoClose={4000}
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
