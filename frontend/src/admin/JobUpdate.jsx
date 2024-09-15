import React, { useState ,useRef} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { toast,ToastContainer } from 'react-toastify';
import { toggleLoader } from '../redux/loaderSlice';
import { updateJob } from '../redux/JobSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { checkNumber ,checkString} from '../hooks/check';
import { CustomButtonBlue } from '../components/CustomButton';
import CallApi from './CallApi';

const JobUpdate = () => {
  const {id} = useParams();
    const loader = useSelector((state)=>state.user.loader)
const dispatch = useDispatch();
const navigate = useNavigate();
   const jobData = useSelector((state)=>state.job.job)
    const [job,setJob] = useState({
        title: jobData[id].title,
        req: jobData[id].requirements.join(","),
        description:jobData[id].description,
        location: jobData[id].location,
        salary: jobData[id].salary,
        jobType:jobData[id].jobType,
        exp: jobData[id].experienceLevel,
        position: jobData[id].position,
       
      });
     
    const handleChange = (e)=>{
      const {name,value} = e.target;
      console.log(value)
      setJob({
        ...job,
        [name]:value
      })
    }
      const handleSubmit = async (e) => {
        e.preventDefault();
        for(const key in job){
          const val = job[key]||""
          if(["salary","position","exp"].includes(key)){
            if(!checkNumber(val)){
              console.log(val)
              toast.error("Input Fiels are Incorrect")
              return;
            }
          }
          else if(["req","description"].includes(key)){
           continue;
          }
          else{
            if(!checkString(val)){
              console.log(val)
              toast.error("Input Fiels are Incorrect")
              return;
            }
          }
        }
        const formData = {}
        formData["title"] = job?.title || "";
        formData["requirements"]=  job?.req || "";
        formData["location"]=  job?.location|| "";
        formData["description"]= job?.description || "";
        formData["experienceLevel"]=  job?.exp || "";
        formData["salary"]=  job?.salary|| "";
        formData["jobType"]= job?.jobType|| "";
        formData["position"]=  job?.position|| "";
        console.log(formData)

        try {
          dispatch(toggleLoader(true));
         console.log(jobData[id]._id)
            const response = await fetch(`http://localhost:3000/job/update?id=${jobData[id]._id}`, {
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
            } 
            else {
             
              toast.error(data.message)
                console.log("Data couldn't be sent successfully");
            }
        } catch (error) {
          toast.error("Job updation failed, Try Again")
            console.log(error);
        }
        finally{
          dispatch(toggleLoader(false));
          CallApi();
        }
    };
    
      return loader ? <Loader/>:(
        
        <div className="p-6 max-w-lg mx-auto text-white bg-[#0f172a] rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Update Job</h2>
          <form onSubmit={handleSubmit} className="space-y-4 text-white">
  <div>
    <label className="block text-xs md:text-[16px] text-lime-500">Title/Role</label>
    <input
      type="text"
      name="title"
      value={job.title}
      onChange={handleChange}
      className="w-full h-8 md:h-10 p-2 text-xs my-1 md:text-[16px] border rounded bg-[#213155] text-white"
    />
  </div>

  <div>
    <label className="block text-xs md:text-[16px] text-lime-500">Description</label>
    <input
      type="text"
      name="description"
      value={job.description}
      onChange={handleChange}
      className="w-full h-8 md:h-10 text-xs my-1 md:text-[16px] p-2 border rounded bg-[#213155] text-white"
    />
  </div>

  <div>
    <label className="block text-xs md:text-[16px] text-lime-500">Requirements</label>
    <input
      type="text"
      name="requirements"
      value={job.req}
      onChange={handleChange}
      className="w-full h-8 md:h-10 p-2 text-xs my-1 md:text-[16px] border rounded bg-[#213155] text-white"
    />
   
  </div>

  {/* Smaller fields in parallel */}
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-xs md:text-[16px] text-lime-500">Salary</label>
      <input
        type="number"
        name="salary"
        value={job.salary}
        onChange={handleChange}
        className="w-full h-8 md:h-10 p-2 text-xs my-1 md:text-[16px] border rounded bg-[#213155] text-white"
      />
    </div>
    <div>
      <label className="block text-xs md:text-[16px] text-lime-500">Location</label>
      <input
        type="text"
        name="location"
        value={job.location}
        onChange={handleChange}
        className="w-full h-8 md:h-10 p-2 text-xs my-1 md:text-[16px] border rounded bg-[#213155] text-white"
      />
    </div>
  </div>

  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-xs md:text-[16px] text-lime-500">Job Type</label>
      <input
        type="text"
        name="jobType"
        value={job.jobType}
        onChange={handleChange}
        className="w-full h-8 md:h-10 p-2 text-xs my-1 md:text-[16px] border rounded bg-[#213155] text-white"
      />
    </div>
    <div>
      <label className="block text-xs md:text-[16px] text-lime-500">Experience Level</label>
      <input
        type="number"
        name="experience"
        value={job.exp}
        onChange={handleChange}
        className="w-full h-8 md:h-10 p-2 text-xs my-1 md:text-[16px] border rounded bg-[#213155] text-white"
      />
    </div>
  </div>

  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-xs md:text-[16px] text-lime-500">No of Positions</label>
      <input
        type="number"
        name="position"
        value={job.position}
        onChange={handleChange}
        className="w-full h-8 md:h-10 p-2 text-xs my-1 md:text-[16px] border rounded bg-[#213155] text-white"
      />
    </div>
  </div>

  <button type="submit">
   <CustomButtonBlue>Update Job</CustomButtonBlue>
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

export default JobUpdate
