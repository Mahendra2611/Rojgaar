import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addJob } from '../redux/JobSlice';
import { ToastContainer,toast } from 'react-toastify';
import { toggleLoader } from '../redux/loaderSlice';
const CallApi = () => {
    //console.log("api caled")
    const dispatch = useDispatch();
    async function getData1() {
        try {
          dispatch(toggleLoader(true));
           
          const response = await fetch(`http://localhost:3000/job/getadminjobs`, {
              method: "GET",
              credentials: "include",
              headers:{
                "Content-Type":"application/json"
              }
          });
          const data = await response.json();
          if (response.ok) {
              dispatch(addJob(data?.jobs))
              //console.log(data.jobs)
             // console.log("Data received successfully");
             
          } else {
              toast.error(data.message)
          }
        } catch (error) {
          toast.error("Something went wrong !!!")
        }
        finally{
          dispatch(toggleLoader(false));
           
        }
      }
      async function getData2() {
        try {
          dispatch(toggleLoader(true));
           
          const response = await fetch("http://localhost:3000/company/get", {
              method: "GET",
              credentials: "include",
             
          });
  
          if (response.ok) {
            const data = await response.json();
            //console.log(data)
              dispatch(addCompany(data.companies))
              //console.log("Data received successfully");
             
          } else {
            toast.error("Something went wrong !!!")
              //console.log("Data couldn't be sent successfully");
          }
        } catch (error) {
          toast.error("Something went wrong !!!")
         // console.log(error)
        }
        finally{
          dispatch(toggleLoader(false));
           
        }
      }
      useEffect(()=>{
        getData1();
        getData2();
      },[])
  return (
   <>
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

/></>
  )
}

export default CallApi
