import React, { useState ,useRef} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { toast,ToastContainer } from 'react-toastify';
import { toggleLoader } from '../redux/userSlice';
import { updateJob } from '../redux/JobSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';

const JobUpdate = () => {
  const {id} = useParams();
    const loader = useSelector((state)=>state.user.loader)
const dispatch = useDispatch();
const navigate = useNavigate();
   const jobData = useSelector((state)=>state.job.job)
    const [job,setJob] = useState({
        title: jobData[id].title,
        req: jobData[id].requirements[0],
        description:jobData[id].description,
        location: jobData[id].location,
        salary: jobData[id].salary,
        jobType:jobData[id].jobType,
        exp: jobData[id].experienceLevel,
        position: jobData[id].position,
       
      });
     
    const handleChange = (e)=>{
      const {name,value} = e.target;

      setJob({
        ...job,
        [name]:value
      })
    }
      const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {}
        formData["title"] = job?.title || "";
        formData["requirements"]=  job?.req || "";
        formData["location"]=  job?.location|| "";
        formData["description"]= job?.description || "";
        formData["experienceLevel"]=  job?.exp || "";
        formData["salary"]=  job?.salary|| "";
        formData["jobType"]= job?.jobType|| "";
        formData["position"]=  job?.position|| "";
        // formData.append("company",  job?.company?.current?.value || "");
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

            if (response.ok) {
              const data = await response.json();
              console.log(data.job)
             
                console.log("Data received successfully");
                navigate("/job")
            } else {
                console.log("Data couldn't be sent successfully");
            }
        } catch (error) {
            console.log(error);
        }
        finally{
          dispatch(toggleLoader(false));
        }
    };
    
      return loader ? <Loader/>:(
        
        <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Create Job</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={job.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <label className="block text-gray-700">Description</label>
              <input
                type="text"
                name="description"
                value={job.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Requirements</label>
              <input
                type="text"
                name="requirements"
                value={job.req}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Salary</label>
              <input
                type="number"
                name="salary"
                value={job.salary}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={job.location}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Job Type</label>
              <input
                type="text"
                name="jobType"
                value={job.jobType}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Experience Level</label>
              <input
                type="number"
                name="experience"
                value={job.exp}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">No of Position</label>
              <input
                type="number"
                name="jobType"
                value={job.position}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            {/* <div>
              <label className="block text-gray-700">Select a company</label>
              <select ref={job.company}>
               
                <option>Microsoft</option>
                <option>Google</option>
              </select>
            </div> */}
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded"
            >
              Update  Job
            </button>
          </form>
          <ToastContainer
position="top-right"
autoClose={4000}
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
