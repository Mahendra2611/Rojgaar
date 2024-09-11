import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

const AdminProtected = ({children}) => {
    const user = useSelector((state)=>state.user.user)
    const navigate = useNavigate();
    useEffect(()=>{
        if(user == null || user.role !== 'recruiter'){
            navigate("/error")
        }
    },[])
  return (
   <>
   {children}
   </>
  )
}

export default AdminProtected
