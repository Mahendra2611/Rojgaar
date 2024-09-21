import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addJob } from '../redux/JobSlice';
import { ToastContainer,toast } from 'react-toastify';
import { toggleLoader } from '../redux/loaderSlice';
import { END_POINT } from '../utils/constants';

    export const fun = ()=>{
      const dispatch = useDispatch();
    async function getData1() {
     
        try {
          dispatch(toggleLoader(true));
           
          const response = await fetch(`${END_POINT}/job/getadminjobs`, {
              method: "GET",
              credentials: "include",
              headers:{
                "Content-Type":"application/json"
              }
          });
          const data = await response.json();
          console.log(data)
          if (response.ok) {
              dispatch(addJob(data?.jobs))
              //console.log(data.jobs)
             // console.log("Data received successfully");
             
          } else {
             return data.message
          }
        } catch (error) {
          return "Something went wrong !!!"
        }
        finally{
          dispatch(toggleLoader(false));
           
        }
      }
      async function getData2() {
       
        try {
          dispatch(toggleLoader(true));
           
          const response = await fetch(`${END_POINT}/company/get`, {
              method: "GET",
              credentials: "include",
             
          });

          const data = await response.json();
          console.log(data)
          if (response.ok) {
           
            //console.log(data)
              dispatch(addCompany(data.companies))
              //console.log("Data received successfully");
             
          } else {
            return (data.message)
              //console.log("Data couldn't be sent successfully");
          }
        } catch (error) {
          return ("Something went wrong !!!")
         // console.log(error)
        }
        finally{
          dispatch(toggleLoader(false));
           
        }
      }
      useEffect(()=>{
       const fun2 = async()=>{
        console.log("fun start")
         getData1();
         getData2();
        console.log("fun end")
       }
       fun2();
      },[])
    }
     