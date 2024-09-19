import React, { useEffect, useState ,useMemo} from 'react'
import JobCard from './JobCard'
import { addJob } from '../redux/JobSlice'
import NotFound from './NotFound'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'
import { addIntern } from '../redux/InternSlice'
import { handleSavee } from './APIreq'
const InternShip = () => {
    const dispatch = useDispatch();
    const {filter} = useParams();
    const jobsData = useSelector((state)=>state.intern.intern);
   // console.log(jobsData)
    const [inp,setInp] = useState(filter||"");
    const filterData = useMemo(()=>{
        return jobsData?.length>0 && jobsData?.filter((job)=>((job?.company?.name?.toLowerCase().includes(inp?.toLowerCase()))|| inp?.trim() === "" || (job?.title?.toLowerCase().includes(inp?.toLowerCase()))))
      },[inp,jobsData])
  //console.log(filterData)
      function debounce(func,time){
          let timeOutId;
          return (...args)=>{
               clearTimeout(timeOutId)
              timeOutId = setTimeout(()=>{
                 func(...args)
              },time)
          }
      }
      const handleSave = async(jobId)=>{
        const result =  await handleSavee(jobId)
       // console.log(result)
      
         toast(result)
        
       }
      const handleChange = debounce((value)=>{
        setInp(value);
      },500);
    const getJobs = async()=>{
       // console.log("get job called")
        try {
           const response =  await fetch("http://localhost:3000/job/get",{
            method:"GET",
            credentials:"include",
           })
           const data  = await response.json();
          // console.log(data.job)
           dispatch(addIntern(data.job.filter((data)=>data.jobType.includes("Intern"))));
        } catch (error) {
            toast.error("Something went wrong")
        }
    }
    useEffect(()=>{
        getJobs();  
    },[])
  return (
    <div className='space-y-5 m-auto'>
    <div className='flex justify-center items-center px-10 text-black'>
       <input 
       type='text'
       placeholder='search by name'
       className='px-4 py-2 text-[14px] sm:text-[16px] w-auto rounded-xl text-black '
       onChange={(e)=>{
        handleChange(e.target.value)
      console.log(e.target.value)
      }}
       />
       
      </div>
      <div className='flex px-5 flex-wrap justify-center items-center gap-10'>
     {filterData?.length>0 ? (filterData.map((job,index)=>(
        <JobCard key={index} data={job} handleSave={handleSave}/>
     ))):((<NotFound/>))}
    </div>
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

export default InternShip
