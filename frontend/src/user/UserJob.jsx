import React, { useEffect, useState, useMemo } from 'react'
import AdminJobCard from './AdminJobCard'
import { addJob } from '../redux/JobSlice'
import NotFound from './NotFound'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { handleSavee } from './APIreq'
import { END_POINT } from '../utils/constants'
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
    return jobsData?.length > 0 && jobsData?.filter((job) => ((job?.name?.toLowerCase().replace(/\s+/g, '').includes(inp?.toLowerCase())) || inp?.trim() === "" || (job?.role?.toLowerCase().replace(/\s+/g, '').includes(inp?.toLowerCase()))))
  }, [inp, jobsData])
  console.log(filterData)
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
      console.log(data)
      dispatch(addJob(data.jobData));
    } catch (error) {
      console.log(error)
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
      <div className='flex justify-center items-center px-10 text-black'>
        {/* <input 
       type='text'
      
       className='px-4 py-2 text-[14px] sm:text-[16px] w-auto rounded-xl text-black '
       onChange={(e)=>{
        handleChange(e.target.value)
      //console.log(e.target.value)
      }}
       /> */}
        <Input placeholder='search by name or title' onChange={(e) => {
          handleChange(e.target.value)
        }} />
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
