import React, { useState ,useRef} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { toast,ToastContainer } from 'react-toastify';
import { toggleLoader } from '../redux/userSlice';
import { addJob } from '../redux/JobSlice';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const JobCreate = () => {
  
    const loader = useSelector((state)=>state.user.loader)
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
        company:useRef(null)
      };
     
    
      const handleSubmit = async (e) => {
        e.preventDefault();

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
        console.log(formData)

        try {
          dispatch(toggleLoader(true));
         
            const response = await fetch("http://localhost:3000/job/post", {
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
              ref={job.title}
                className="w-full p-2 border rounded"
              />
              <label className="block text-gray-700">Description</label>
              <input
                type="text"
                name="description"
              ref={job.description}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Requirements</label>
              <input
                type="text"
                name="requirements"
                ref={job.req}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Salary</label>
              <input
                type="number"
                name="salary"
             ref={job.salary}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                name="location"
              ref={job.location}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Job Type</label>
              <input
                type="text"
                name="jobType"
              ref={job.jobType}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Experience Level</label>
              <input
                type="number"
                name="experience"
              ref={job.exp}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">No of Position</label>
              <input
                type="number"
                name="jobType"
              ref={job.position}
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
              Create Job
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

export default JobCreate
