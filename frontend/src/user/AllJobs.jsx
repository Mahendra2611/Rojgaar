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
    const [inp,setInp] = useState({
        
    });

   
    
    const filterData = useMemo(()=>{
        return jobsData.length>0 && jobsData.filter((job)=>((job?.company?.name?.toLowerCase().includes(inp?.toLowerCase()))|| inp?.trim() === "" || (job?.title?.toLowerCase().includes(inp?.toLowerCase()))))
      },[inp,jobsData])
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
      
       if(jobsData.length === 0){
        getJobs();
       }
       
    },[])
  return (
    <div className='flex'>
        <div className='basis-1/3 px-5'><FilterOption/></div>
        <div className='space-y-5'>
    <div className='basis-2/3 flex justify-between items-center px-10'>
       <input 
       type='text'
       placeholder='search by name'
       className='px-4 py-2 text-[16px]'
       onChange={(e)=>{
        handleChange(e.target.value)
      console.log(e.target.value)
      }}
       />
       
      </div>
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
