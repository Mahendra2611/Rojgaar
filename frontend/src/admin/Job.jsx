import React, { useEffect, useState } from 'react'
import JobTable from './JobTable';
import { useMemo } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { toggleLoader } from '../redux/loaderSlice';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { addJob ,deleteJobb} from '../redux/JobSlice';
import { toast } from 'react-toastify';
import DeleteConfirmation from './DeleteConfirmation';
import { CustomButtonGreen } from '../components/CustomButton';

const Job = () => {
    const [inp,setInp] = useState("");
    const navigate = useNavigate();
    const loader = useSelector((state)=>state.loader.loader)
    const dispatch = useDispatch();
    let jobData = useSelector((state)=>state?.job?.job||[])
    const [isModal,setisModal] = useState(false);
    const [jobToDelete,setJobtoDelete] = useState({});
    //console.log(jobData)
const handleClick = ()=>{
navigate("/job/create")
}
    const filterData = useMemo(()=>{
      return jobData?.length>0 && jobData?.filter((job)=>(job?.company?.name?.toLowerCase().includes(inp?.toLowerCase()))||job?.title?.toLowerCase().includes(inp?.toLowerCase())|| inp?.trim() === "")
    },[inp,jobData])
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
    
    async function getData() {
      try {
        dispatch(toggleLoader(true));
         
        const response = await fetch(`https://rojgaar-wm0j.onrender.com/job/getadminjobs`, {
            method: "GET",
            credentials: "include",
            headers:{
              "Content-Type":"application/json"
            }
        });
        const data = await response.json();
        if (response.ok) {
            dispatch(addJob(data?.jobs))
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
    const deleteJob = async(id,index) => {
     
      try {
         const response = await fetch(`https://rojgaar-wm0j.onrender.com/job/deletejob/${id}`,{
             method:"DELETE",
             credentials:"include"
         })
         if(response.ok){
          dispatch(deleteJobb(index));
         }
         else{
          toast.error("Job deletion failed")
         }
      } catch (error) {
        toast.error("something went wrong")
      }
     }
     const confirmDelete = (id,index)=>{
      setJobtoDelete({id,index})
      setisModal(true);
     }
     const handleModalConfirm = ()=>{
      deleteJob(jobToDelete.id,jobToDelete.index)
      handleModalClose();
     }
     const handleModalClose = ()=>{
      setisModal(false);
     }
    useEffect(()=>{
      if(jobData?.length === 0){
        getData();
      }
    },[])
  return loader?<Loader/>:(
    <div className='space-y-5'>
    <div className='flex justify-between gap-3 items-center px-4 md:px-10 text-white'>
     
      <div className='flex-1 max-w-52'>
        <input 
          type='text'
          placeholder='Search by name or role'
          className='w-full px-1 md:px-3 py-1 md:py-2 text-[12px] md:text-[16px] rounded-lg'
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </div>
      
      {/* Button div */}
      <div className='flex-1 flex justify-end '>
        <CustomButtonGreen onClick={handleClick}>Create New Job</CustomButtonGreen>
      </div>
    </div>
    
    <JobTable job={filterData} deleteJob={confirmDelete} />
  
    {isModal && (
      <DeleteConfirmation 
        onClose={handleModalClose}
        onConfirm={handleModalConfirm} 
      />
    )}
  </div>
  
  )
}

export default Job
