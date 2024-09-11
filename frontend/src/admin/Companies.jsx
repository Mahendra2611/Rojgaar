import React, { useEffect, useState } from 'react'
import CompanyTable from './CompanyTable'
import { useMemo } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { toggleLoader } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { addCompany } from '../redux/companySlice';
const Companies = () => {
    const [inp,setInp] = useState("");
    const navigate = useNavigate();
    const loader = useSelector((state)=>state.user.loader)
    const dispatch = useDispatch();
    let companiesData = useSelector((state)=>state?.company?.company||[])
    console.log(companiesData)
const handleClick = ()=>{
navigate("/company/create")
}
    const filterData = useMemo(()=>{
      return companiesData.length>0 && companiesData.filter((company)=>(company?.name?.toLowerCase().includes(inp?.toLowerCase()))|| inp?.trim() === "")
    },[inp,companiesData])
console.log(filterData)
    function debounce(func,time){
        let timeOutId;
       // console.log("debounced called")
        return (...args)=>{
             clearTimeout(timeOutId)
            timeOutId = setTimeout(()=>{
              //console.log("time out called")
              //console.log(...args)
               func(...args)
            },time)
        }
    }

    const handleChange = debounce((value)=>{
      setInp(value);
    },500);
    //console.log(handleChange)
    async function getData() {
      try {
        dispatch(toggleLoader(true));
         
        const response = await fetch("http://localhost:3000/company/get", {
            method: "GET",
            credentials: "include",
           
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data)
            dispatch(addCompany(data.companies))
            console.log("Data received successfully");
           
        } else {
            console.log("Data couldn't be sent successfully");
        }
      } catch (error) {
        console.log(error)
      }
      finally{
        dispatch(toggleLoader(false));
         
      }
    }
    useEffect(()=>{
      getData();
    },[])
  return loader?<Loader/>:(
    <div className='space-y-5'>
      <div className='flex justify-between items-center px-10'>
       <input 
       type='text'
       placeholder='search by name'
       className='px-4 py-2 text-[16px]'
       onChange={(e)=>{
        handleChange(e.target.value)
      console.log(e.target.value)
      }}
       />
       <button onClick={handleClick} className='px-4 py-2 text-[16px] text-white bg-green-400'>New Company</button>
      </div>
      <CompanyTable companies={filterData}/>
      
    </div>
  )
}

export default Companies
