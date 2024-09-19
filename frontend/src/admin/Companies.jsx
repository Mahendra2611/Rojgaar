import React, { useEffect, useState } from 'react'
import CompanyTable from './CompanyTable'
import { useMemo } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { toggleLoader } from '../redux/loaderSlice';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { addCompany ,deleteComanyy} from '../redux/companySlice';
import DeleteConfirmation from './DeleteConfirmation';
import { ToastContainer,toast } from 'react-toastify';
import { CustomButtonGreen } from '../components/CustomButton';
const Companies = () => {
    const [inp,setInp] = useState("");
    const [isModal,setisModal] = useState(false);
    const [companyToDelete,setCompanytoDelete] = useState({});
    const navigate = useNavigate();
    const loader = useSelector((state)=>state.loader.loader)
    const dispatch = useDispatch();
    let companiesData = useSelector((state)=>state?.company?.company||[])
    //console.log(companiesData)
const handleClick = ()=>{
navigate("/company/create")
}
    const filterData = useMemo(()=>{
      return companiesData.length>0 && companiesData.filter((company)=>(company?.name?.toLowerCase().includes(inp?.toLowerCase()))|| inp?.trim() === "")
    },[inp,companiesData])
//console.log(filterData)
    function debounce(func,time){
        let timeOutId;
       // console.log("debounced called")
        return (...args)=>{
             clearTimeout(timeOutId)
            timeOutId = setTimeout(()=>{
              //console.log("time out called")
              //console.log(...args)
               func(...args)
            },time)
        }
    }

    const handleChange = debounce((value)=>{
      setInp(value);
    },500);
    //console.log(handleChange)
    async function getData() {
      try {
        dispatch(toggleLoader(true));
         
        const response = await fetch("https://rojgaar-wm0j.onrender.com/company/get", {
            method: "GET",
            credentials: "include",
           
        });

        if (response.ok) {
          const data = await response.json();
          //console.log(data)
            dispatch(addCompany(data.companies))
            //console.log("Data received successfully");
           
        } else {
            //console.log("Data couldn't be sent successfully");
        }
      } catch (error) {
       // console.log(error)
      }
      finally{
        dispatch(toggleLoader(false));
         
      }
    }
    const deleteCompany = async(id,index) => {
      //console.log(id)
      //console.log(index)
      try {
         const response = await fetch(`https://rojgaar-wm0j.onrender.com/company/deletecompany/${id}`,{
             method:"DELETE",
             credentials:"include"
         })
         if(response.status === 200){
          //toast.success("job deleted successfully")
          dispatch(deleteComanyy(index));
         }
         else{
          toast.error("Company deletion failed")
         }
      } catch (error) {
        toast.error("something went wrong")
      }
     }
     const confirmDelete = (id,index)=>{
      setCompanytoDelete({id,index})
      setisModal(true);
     }
     const handleModalConfirm = ()=>{
      deleteCompany(companyToDelete.id,companyToDelete.index)
      handleModalClose();
     }
     const handleModalClose = ()=>{
      setisModal(false);
     }
    useEffect(()=>{
     
        getData();
      
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
       <CustomButtonGreen onClick={handleClick}>Create New Company</CustomButtonGreen>
     </div>
      </div>
      <CompanyTable companies={filterData} deleteCompnay={confirmDelete}/>
      {isModal && <DeleteConfirmation onClose={handleModalClose}
          onConfirm={handleModalConfirm}/>}
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
  )
}

export default Companies
