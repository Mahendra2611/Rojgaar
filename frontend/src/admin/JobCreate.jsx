import React, { useState ,useRef} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { toast,ToastContainer } from 'react-toastify';
import { toggleLoader } from '../redux/loaderSlice';
import { addJob } from '../redux/JobSlice';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { CustomButtonBlue } from '../components/CustomButton';
import { checkString } from '../hooks/check';
import { checkNumber } from '../hooks/check';
import CallApi from './CallApi';
const JobCreate = () => {
  
  const loader = useSelector((state)=>state.loader.loader)
const dispatch = useDispatch();
const navigate = useNavigate();
   
    const job = {
        title: useRef(null),
        req: useRef(null),
        description:useRef(null),
        location: useRef(null),
        salary: useRef(null),
        jobType: useRef(null),
        exp: useRef(null),
        position: useRef(null),
      
      };
     
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        for(const key in job){
          const val = job[key]?.current?.value||""
          if(["salary","position","exp"].includes(key)){
            if(!checkNumber(val)){
              //console.log(val)
              toast.error("Input Fiels are Incorrect")
              return;
            }
          }
          else if(["req","description"].includes(key)){
           continue;
          }
          else{
            if(!checkString(val)){
              //console.log(val)
              toast.error("Input Fiels are Incorrect")
              return;
            }
          }
        }
        const formData = {}
        formData["title"] = job?.title?.current?.value || "";
        formData["requirements"]=  job?.req?.current?.value || "";
        formData["location"]=  job?.location?.current?.value || "";
        formData["description"]= job?.description?.current?.value || "";
        formData["experienceLevel"]=  job?.exp?.current?.value || "";
        formData["salary"]=  job?.salary?.current?.value || "";
        formData["jobType"]= job?.jobType?.current?.value || "";
        formData["position"]=  job?.position?.current?.value || "";
        // formData.append("company",  job?.company?.current?.value || "");
       // console.log(formData)

        try {
          dispatch(toggleLoader(true));
         
            const response = await fetch("https://rojgaar-wm0j.onrender.com/job/post", {
                method: "POST",
                credentials: "include",
                headers:{
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
             
              //console.log(data.job)
              
                //console.log("Data received successfully");
                navigate("/job")
            } else {
              toast.error(data.message)
                //console.log("Data couldn't be sent successfully");
            }
        } catch (error) {
          toast.error("Something went wrong")
            //console.log(error);
        }
        finally{
          dispatch(toggleLoader(false));
          CallApi()
        }
    };
    
      return loader ? <Loader/>:(
        
        <div className="p-6 max-w-lg mx-auto text-white bg-[#0f172a] rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Create Job</h2>
          <form onSubmit={handleSubmit} className="space-y-4 text-white">
  <div>
    <label className="block text-xs md:text-[16px] text-lime-500">Title</label>
    <input
      type="text"
      name="title"
      ref={job.title}
      className="w-full text-xs md:text-[16px] my-1 h-8  md:h-10 p-2 border rounded bg-[#213155] text-white"
    />
  </div>

  <div>
    <label className="block text-lime-500">Description</label>
    <input
      type="text"
      name="description"
      ref={job.description}
      className="w-full p-2 text-xs md:text-[16px] my-1 h-8 md:h-10 border rounded bg-[#213155] text-white"
    />
  </div>

  {/* Smaller fields in parallel */}
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-xs md:text-[16px] text-lime-500">Tech Stacks</label>
      <input
        type="text"
        name="requirements"
        ref={job.req}
        className="w-full text-xs md:text-[16px] my-1 h-8 md:h-10 p-2 border rounded bg-[#213155] text-white"
      />
      <p className='text-red-500 text-[10px] md:text-xs'>*seperate the tech stack by comma</p>
    </div>
    <div>
      <label className="block text-xs md:text-[16px] text-lime-500">Salary</label>
      <input
        type="number"
        name="salary"
        ref={job.salary}
        className="w-full text-xs md:text-[16px] my-1  h-8 md:h-10  p-2 border rounded bg-[#213155] text-white"
      />
    </div>
  </div>

  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-xs md:text-[16px] text-lime-500">Location</label>
      <input
        type="text"
        name="location"
        ref={job.location}
        className="w-full text-xs md:text-[16px] my-1  h-8 md:h-10 p-2 border rounded bg-[#213155] text-white"
      />
    </div>
    <div>
      <label className="block text-xs md:text-[16px] text-lime-500">Job Type</label>
      <input
        type="text"
        name="jobType"
        ref={job.jobType}
        className="w-full text-xs md:text-[16px] my-1 h-8 md:h-10 p-2 border rounded bg-[#213155] text-white"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-xs md:text-[16px] text-lime-500">Experience Level</label>
      <input
        type="number"
        name="experience"
        ref={job.exp}
        className="w-full text-xs md:text-[16px] my-1 h-8 md:h-10 p-2 border rounded bg-[#213155] text-white"
      />
    </div>
    <div>
      <label className="block text-xs md:text-[16px] text-lime-500">No of Position</label>
      <input
        type="number"
        name="position"
        ref={job.position}
        className="w-full text-xs md:text-[16px] my-1 h-8 md:h-10 p-2 border rounded bg-[#213155] text-white"
      />
    </div>
  </div>

  {/* Submit button */}
  <button
    type="submit"
   className='w-full'
  >
   <CustomButtonBlue>Create</CustomButtonBlue>
  </button>
</form>

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
      );
    };

export default JobCreate
