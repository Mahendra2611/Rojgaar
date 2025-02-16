import React, { useEffect, useState, useMemo } from 'react'
import AdminJobCard from './AdminJobCard'
import { addJob } from '../redux/JobSlice'
import NotFound from './NotFound'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { handleSavee } from './APIreq'
import { END_POINT } from '../utils/constants'
import { Search } from "lucide-react"; // Import search icon
import Input from '../components/Input'
import Loader from "../components/Loader"

const UserJob = () => {
  const dispatch = useDispatch();
  const { filter } = useParams();
  const jobsData = useSelector((state) => state.job.job);
  const [inp, setInp] = useState(filter || "");
  const [load, setLoader] = useState(false);
  //console.log(filter)
  // Search function
  const filterData = useMemo(() => {
    //console.log(jobsData)
    return jobsData?.length > 0 &&   jobsData?.filter((job) => ((job.jobType == "Full Time")&&((job?.name?.toLowerCase().replace(/\s+/g, '').includes(inp?.toLowerCase())) || inp?.trim() === "" || (job?.role?.toLowerCase().replace(/\s+/g, '').includes(inp?.toLowerCase())))))
  }, [inp, jobsData])
 // console.log(filterData)

  function debounce(func, time) {
    let timeOutId;
    return (...args) => {
      clearTimeout(timeOutId)
      timeOutId = setTimeout(() => {
        func(...args)
      }, time)
    }
  }

  const handleChange = debounce((value) => {
    setInp(value);
  }, 500);

  const handleSave = async (jobId) => {
    const result = await handleSavee(jobId)
    //console.log(result)
    toast(result)
  }
  const getJobs = async () => {
    // console.log("get job called")
    let timeOutId;
    setLoader(true);
    try {
      timeOutId = setTimeout(()=>{
        toast.warning("Data is taking too long to load. Please refresh the page.")
      },60000)
      const response = await fetch(`${END_POINT}/adminJob/get`, {
        method: "GET",
        credentials: "include",
      })
      const data = await response.json();
     // console.log(data)
      dispatch(addJob(data.jobData));
    } catch (error) {
      //console.log(error)
      toast.error("Something went wrong")
    }
    finally {
      clearTimeout(timeOutId)
      setLoader(false);
      
    }
  }

  useEffect(() => {
    getJobs();
  }, [])

  return load ? <Loader /> : (
    <div className='pb-5 m-auto w-full hide-scrollbar '>
      <div className='flex justify-center items-center px-10 py-5 text-black'>
      
      <input
  type="text"
  placeholder="Search for jobs..."
  className="w-full sm:w-[300px] px-4 py-2 text-[16px] sm:text-[18px] rounded-lg  
             border-2 border-transparent bg-[#3862a5] text-[#f0f2f3] focus:border-[#4DA3FF]
             focus:ring-2 focus:ring-[#4DA3FF] transition-all duration-300 
             shadow-md hover:shadow-lg outline-none 
             placeholder-[#94A3B8] hover:bg-[#24344D]"
  onChange={(e) => handleChange(e.target.value)}
/>


        {/* <Input placeholder='search by name or title' onChange={(e) => {
          handleChange(e.target.value)
        }} /> */}
       
      </div>
      <div className='flex px-5 flex-wrap  justify-center items-center gap-10 w-full  hide-scrollbar'>
        {(filterData?.length > 0) ? (filterData.map((job, index) => (
          <AdminJobCard key={index} data={job} handleSave={handleSave} />
        ))) : ((<NotFound />))}
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        width="100px"
        height="100px"
      />
    </div>

  )
}

export default UserJob
