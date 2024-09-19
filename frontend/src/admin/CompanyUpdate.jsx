import React, { useState ,useRef} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { toast,ToastContainer } from 'react-toastify';
import { toggleLoader } from '../redux/loaderSlice';
import { addCompany } from '../redux/companySlice';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { updateCompany } from '../redux/companySlice';
import { CustomButtonBlue } from '../components/CustomButton';
import CallApi from './CallApi';
const CompanyUpdate = () => {
   const {id} = useParams();
   const loader = useSelector((state)=>state.loader.loader)
     let companiesData = useSelector((state)=>state?.company?.company||[])
 const dispatch = useDispatch();
 const navigate = useNavigate();
    
     const [company,setCompany] = useState({
         name:companiesData[id]?.name ||"",
         website: companiesData[id]?.website ||"",
         description:companiesData[id]?.description ||"",
         location: companiesData[id]?.location ||"",
         logo:"",
        
       });
       const handleFileChange = (e) => {
         const file = e.target.files[0]; 
         const maxSize = 500*1024;
         //console.log(file);
         if(file && file.size > maxSize){
           toast("File size exceeded")
           return;
         }
         else{
            setCompany({
                ...company,
                logo:file,
            })
         }
     };
     const handleChange = (e)=>{
        const {name,value} = e.target
       
        setCompany({
            ...company,
            [name]:value
        })
     }
       const handleSubmit = async (e) => {
         e.preventDefault();
 
         const formData = new FormData();
         formData.append("name", company?.name ||"");
         formData.append("website", company?.website || "");
         formData.append("location", company?.location || "");
         formData.append("description", company?.description || "");
        if(company.logo){
         formData.append("logo", company.logo || "");
        }
        //  formData.forEach((value,key)=>{
        //    console.log(`${key}:${value}`)
        //  })
   console.log(companiesData[id]._id)
         try {
           dispatch(toggleLoader(true));
          
             const response = await fetch(`https://rojgaar-wm0j.onrender.com/company/update/${companiesData[id]._id}`, {
                 method: "POST",
                 credentials: "include",
                 body: formData
             });
             const data = await response.json();
             if (response.ok) {
              
              // console.log(data)
                // dispatch(updateCompany({id:id,data:data}))
                // console.log("Data received successfully");
                 navigate("/company")
             } else {
              toast.error(data.message)
                // console.log("Data couldn't be sent successfully");
             }
         } catch (error) {
          toast.error("Something went wrong")
             //console.log(error);
         }
         finally{
           dispatch(toggleLoader(false));
           
         }
     };
     
       return loader ? <Loader/>:(
         
         <div className="p-6 max-w-lg mx-auto bg-[#0f172a] rounded-lg shadow-lg">
           <h2 className="text-2xl font-bold mb-6 text-white">Update Company</h2>
           <form onSubmit={handleSubmit} className="space-y-4 text-white">
  <div>
    <label className="block text-xs md:text-[16px] text-lime-500">Logo URL</label>
    <input
      type="file"
      name="logo"
      value={company.file}
      onChange={handleFileChange}
      className="w-full h-8 md:h-10 p-2 text-xs my-1 md:text-[16px] border rounded bg-[#213155] text-white"
    />
    <p className='text-red-500 text-[10px]  md:text-xs'>*Upload it only if you want to update it</p>
  </div>

  <div>
    <label className="block text-xs md:text-[16px] text-lime-500">Name</label>
    <input
      type="text"
      name="name"
      value={company.name}
      onChange={handleChange}
      className="w-full h-8 md:h-10 p-2 text-xs my-1 md:text-[16px] border rounded bg-[#213155] text-white"
    />
     <p className='text-red-500 text-[10px] md:text-xs'>*mandatory</p>
  </div>

  <div>
    <label className="block text-xs md:text-[16px] text-lime-500">Website</label>
    <input
      type="text"
      name="website"
      value={company.website}
      onChange={handleChange}
      className="w-full h-8 md:h-10 p-2 text-xs my-1 md:text-[16px] border rounded bg-[#213155] text-white"
    />
  </div>

  <div>
    <label className="block text-xs md:text-[16px] text-lime-500">Description</label>
    <input
      type="text"
      name="description"
      value={company.description}
      onChange={handleChange}
      className="w-full h-8 md:h-10 p-2 text-xs my-1 md:text-[16px] border rounded bg-[#213155] text-white"
    />
  </div>

  <div>
    <label className="block text-xs md:text-[16px]  text-lime-500">Location</label>
    <input
      type="text"
      name="location"
      value={company.location}
      onChange={handleChange}
      className="w-full h-8 md:h-10 p-2 text-xs my-1 md:text-[16px] border rounded bg-[#213155] text-white"
    />
    <p className='text-red-500 text-[10px] md:text-xs'>*mandatory</p>
  </div>

  <button
    type="submit"
   className='flex justify-center items-center'
  >
<CustomButtonBlue>Update Company</CustomButtonBlue>
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

export default CompanyUpdate
