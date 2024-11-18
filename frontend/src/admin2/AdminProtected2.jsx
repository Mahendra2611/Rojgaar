import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

const AdminProtected2 = ({children}) => {
    const user = useSelector((state)=>state.user.user)
   // console.log(user)
    const navigate = useNavigate();
    useEffect(()=>{
        if(user == null || user.role !== 'admin'){
            navigate("/")
        }
    },[])
  return (
   <>
   {children}
   </>
  )
}

export default AdminProtected2
