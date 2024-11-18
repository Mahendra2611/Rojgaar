import React, { useEffect, useState ,useMemo} from 'react'

import { addIntern } from '../redux/InternSlice'
import NotFound from '../user/NotFound'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'
import DeleteConfirmation from '../admin/DeleteConfirmation'
import { END_POINT } from '../utils/constants'

import Loader from "../components/Loader"
import Card2 from './Card2'
const JobPosted = () => {
    //console.log("job posted called")
   const [jobData,setJobData] = useState();
    const [load,setLoader] = useState(false);
    const [openDelete,setOpenDelete] = useState({
        id:"",
        flag:false,
    });
    const navigate = useNavigate();
    //console.log("before handleDelete")
    const handleDelete = (id)=>{
        setOpenDelete({id:id,flag:true});
    }
    const handleUpdate = (id)=>{
        navigate(`/Admin2/jobUpdate/${id}`)
    }
    const confirmDelete = async()=>{
       
        try {
           const response =  await fetch(`${END_POINT}/adminJob/delete/${openDelete.id}`,{
            method:"DELETE",
            credentials:"include",
           })
           const data = await response.json();
           //console.log(data)
           if(response.status != 200){
            toast.error(data.message)
           }
        } catch (error) {
           // console.log(error)
            toast.error("Something went wrong")
        }
        finally{
          setOpenDelete({id:"",flag:false})
          getJobs();
        }
    }
    //console.log("before get job")
    const getJobs = async()=>{
       // console.log("get job called")
       setLoader(true);
        try {
           const response =  await fetch(`${END_POINT}/adminJob/get`,{
            method:"GET",
            credentials:"include",
           })
           const data  = await response.json();
           //console.log(data)
           setJobData(data.jobData)
        } catch (error) {
            toast.error("Something went wrong")
        }
        finally{
          setLoader(false);
          
        }
    }

    useEffect(()=>{
       // console.log("use effect")
        getJobs();  
    },[])
console.log("return")
  return load ?<Loader/>:(
    <div className='space-y-5 m-auto w-full hide-scrollbar '>
    
      <div className='flex px-5 flex-wrap  justify-center items-center gap-10 w-full  hide-scrollbar'>
     {( jobData?.length>0) ? (jobData.map((job,index)=>(
        <Card2 key={index} data={job} handleDelete={(id)=>{handleDelete(id)}} handleUpdate={(id)=>{handleUpdate(id)}}/>
     ))):((<NotFound/>))}
    </div>
    <div>
        {openDelete.flag && <DeleteConfirmation onClose={()=>{setOpenDelete({id:"",flag:false})}} onConfirm={()=>{confirmDelete()}}/>}
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

export default JobPosted
