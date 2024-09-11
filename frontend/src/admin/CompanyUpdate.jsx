import React, { useState ,useRef} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { toast,ToastContainer } from 'react-toastify';
import { toggleLoader } from '../redux/userSlice';
import { addCompany } from '../redux/companySlice';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { updateCompany } from '../redux/companySlice';
const CompanyUpdate = () => {
   const {id} = useParams();
     const loader = useSelector((state)=>state.user.loader)
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
         console.log(file);
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
         formData.forEach((value,key)=>{
           console.log(`${key}:${value}`)
         })
 
         try {
           dispatch(toggleLoader(true));
          
             const response = await fetch(`http://localhost:3000/company/update/${companiesData[id]._id}`, {
                 method: "POST",
                 credentials: "include",
                 body: formData
             });
 
             if (response.ok) {
               const data = await response.json();
               console.log(data)
                dispatch(updateCompany({id:id,data:data}))
                 console.log("Data received successfully");
                 navigate("/company")
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
           <h2 className="text-2xl font-bold mb-6">Register Company</h2>
           <form onSubmit={handleSubmit} className="space-y-4">
             <div>
               <label className="block text-gray-700">Logo URL</label>
               <input
                 type="file"
                 name="logo"
               value={company.file}
                 onChange={handleFileChange}
                 className="w-full p-2 border rounded"
               />
             </div>
             <div>
               <label className="block text-gray-700">Name</label>
               <input
                 type="text"
                 name="name"
                value={company.name}
                onChange={handleChange}
                 
                 className="w-full p-2 border rounded"
               />
             </div>
             <div>
               <label className="block text-gray-700">Website</label>
               <input
                 type="text"
                 name="webiste"
                value={company.website}
                onChange={handleChange}
                 className="w-full p-2 border rounded"
               />
             </div>
             <div>
               <label className="block text-gray-700">Description</label>
               <input
                 type="text"
                 name="description"
                value={company.description}
                onChange={handleChange}
                 className="w-full p-2 border rounded"
               />
             </div>
             <div>
               <label className="block text-gray-700">Location</label>
               <input
                 type="text"
                 name="location"
                value={company.location}
                onChange={handleChange}
                 className="w-full p-2 border rounded"
               />
             </div>
            
             <button
               type="submit"
               className="w-full p-2 bg-blue-500 text-white rounded"
             >
               update Company
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

export default CompanyUpdate
