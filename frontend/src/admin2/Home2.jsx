import React from 'react'
import { Pattern1 } from '../components/Background'
import Button from "../components/Button"
import { useNavigate } from 'react-router-dom'
import JobPosted from './JobPosted'
const Home2 = () => {
    const navigate = useNavigate();
    const logout = ()=>{
        navigate("/logout")
    }
    const createJob = ()=>{
        navigate("/admin2/jobCreate")
    }
  return (
   <Pattern1>
   <div className='min-h-screen w-full pt-5 flex flex-col gap-5'>
   <div className=' flex items-center w-full gap-5 justify-center '>
       
        <Button onClick={()=>{createJob()}}>Create Job</Button>
        <Button onClick={()=>{logout()}}>Logout</Button>
    </div>
    <div>
<JobPosted/>
    </div>
   </div>
   </Pattern1>
  )
}

export default Home2
