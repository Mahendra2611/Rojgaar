import React, { useState ,useRef} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { toast,ToastContainer } from 'react-toastify';
import { toggleLoader } from '../redux/loaderSlice';
import { addCompany } from '../redux/companySlice';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { CustomButtonBlue } from '../components/CustomButton';
import CallApi from './CallApi';

const CompanyCreate = () => {
   const [logo,setLogo] = useState();
   const loader = useSelector((state)=>state.loader.loader)
const dispatch = useDispatch();
const navigate = useNavigate();
   
    const company = {
        name: useRef(null),
        website: useRef(null),
        description:useRef(null),
        location: useRef(null),
       
      };
      const handleFileChange = (e) => {
        const file = e.target.files[0]; 
        const maxSize = 500*1024;
        console.log(file);
        if(file && file.size > maxSize){
          toast("File size exceeded")
          return;
        }
        else{
            setLogo(file);
        }
    };
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", company?.name?.current?.value || "");
        formData.append("website", company?.website?.current?.value || "");
        formData.append("location", company?.location?.current?.value || "");
        formData.append("description", company?.description?.current?.value || "");
       if(logo){
        formData.append("logo", logo || "");
       }
        formData.forEach((value,key)=>{
          console.log(`${key}:${value}`)
        })

        try {
          dispatch(toggleLoader(true));
         
            const response = await fetch("http://localhost:3000/company/register", {
                method: "POST",
                credentials: "include",
                body: formData
            });
            const data = await response.json();
            if (response.ok) {
             
              console.log(data)
               
                console.log("Data received successfully");
                navigate("/company")
            } else {
              toast.error(data?.message||"company registration failed")
                console.log("Data couldn't be sent successfully");
            }
        } catch (error) {
          toast.error("Company Registeration Failed")
            console.log(error);
        }
        finally{
          dispatch(toggleLoader(false));
          CallApi()
        }
    };
    
      return loader ? <Loader/>:(
        
        <div className="p-6 max-w-lg mx-auto bg-[#0f172a] rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-white ">Register Company</h2>
          <form onSubmit={handleSubmit} className="space-y-4 text-white">
  <div>
    <label className="block text-xs md:text-[16px]  text-lime-500">Logo URL</label>
    <input
      type="file"
      name="logo"
      onChange={handleFileChange}
      className="w-full h-8 md:h-10 p-2 text-xs my-1 md:text-[16px] border rounded bg-[#213155] text-white"
    />
     <p className='text-red-500 text-[10px] md:text-xs'>*file size should be less then 500KB</p>
  </div>

  <div>
    <label className="block text-xs md:text-[16px]   text-lime-500">Name</label>
    <input
      type="text"
      name="name"
      ref={company.name}
      className="w-full h-8 md:h-10 p-2 text-xs my-1 md:text-[16px] border rounded bg-[#213155] text-white"
    />
     <p className='text-red-500 text-[10px] md:text-xs'>*mandatory</p>
  </div>

  <div>
    <label className="block text-xs md:text-[16px]  text-lime-500">Website</label>
    <input
      type="text"
      name="website"
      ref={company.website}
      className="w-full h-8 md:h-10 p-2 text-xs my-1 md:text-[16px] border rounded bg-[#213155] text-white"
    />
     <p className='text-red-500 text-[10px] md:text-xs'>*mandatory</p>
  </div>

  <div>
    <label className="block text-xs md:text-[16px]  text-lime-500">Description</label>
    <input
      type="text"
      name="description"
      ref={company.description}
      className="w-full h-8 md:h-10 p-2 text-xs my-1 md:text-[16px] border rounded bg-[#213155] text-white"
    />
     <p className='text-red-500 text-[10px] md:text-xs'>*mandatory</p>
  </div>

  <div>
    <label className="block text-xs md:text-[16px]  text-lime-500">Location</label>
    <input
      type="text"
      name="location"
      ref={company.location}
      className="w-full h-8 md:h-10 p-2 text-xs md:text-[16px] my-1 border rounded bg-[#213155] text-white"
    />
     <p className='text-red-500 text-[10px] md:text-xs '>*mandatory</p>
  </div>

  <button
    type="submit"
   
  >
    <CustomButtonBlue>Register Company</CustomButtonBlue>
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

export default CompanyCreate
