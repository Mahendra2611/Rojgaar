import React, { useEffect, useState ,useMemo} from 'react'
import JobCard from './JobCard'
import { addJob } from '../redux/JobSlice'
import NotFound from './NotFound'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import FilterOption from './FilterOption'
const AllJobs = () => {
    const dispatch = useDispatch();
    const {filter} = useParams();
    const jobsData = useSelector((state)=>state.job.job);
const filterValue = useSelector((state)=>state.job.filter)
console.log(filterValue)
   //console.log(jobsData)
    let filterData;
    useMemo(() => {
      if (filterValue?.length === 0) {
        filterData = jobsData;
        return;
      }
  
      const locationFilters = filterValue?.filter(f => ["delhi", "noida", "gurgaon", "bengluru", "hyderabad", "other"].includes(f));
      const industryFilters = filterValue?.filter(f => ["frontend developer", "backend developer", "full stack developer", "data science", "next js", "others"].includes(f));
     
      const jobTypeFilters = filterValue.filter(f => ["full time", "intern"].includes(f));
  console.log(locationFilters)
  console.log(industryFilters)
      filterData = jobsData.filter((job) => {
        const locationMatch = locationFilters?.length === 0 || locationFilters.includes(job.location.toLowerCase());
        const industryMatch = industryFilters?.length === 0 || industryFilters.includes(job.title.toLowerCase());
       
        const jobTypeMatch = jobTypeFilters?.length === 0 || jobTypeFilters.includes(job.jobType.toLowerCase());
  
        return locationMatch && industryMatch  && jobTypeMatch;
      });
    }, [jobsData, filterValue]);
  console.log(filterData)
      function debounce(func,time){
          let timeOutId;
          return (...args)=>{
               clearTimeout(timeOutId)
              timeOutId = setTimeout(()=>{
                 func(...args)
              },time)
          }
      }
  
      const handleChange = debounce((value)=>{
        setInp(value);
      },500);
    const getJobs = async()=>{
        console.log("get job called")
        try {
           const response =  await fetch("http://localhost:3000/job/get",{
            method:"GET",
            credentials:"include",
           })
           const data  = await response.json();
           console.log(data.job)
           dispatch(addJob(data.job));
        } catch (error) {
            
        }
    }
    useEffect(()=>{
      console.log(jobsData)
        getJobs();
    },[])
  return (
    <div className='flex'>
        <div className='basis-1/3 px-5'><FilterOption/></div>
        <div className='space-y-5'>
   
      <div className='flex flex-wrap gap-10'>
     {filterData?.length>0 && filterData.map((job,index)=>(
        <JobCard key={index} data={job}/>
     ))}
    </div>
      </div>
    </div>
    
   
  )
}

export default AllJobs
