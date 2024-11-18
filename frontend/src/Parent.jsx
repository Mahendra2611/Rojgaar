import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { Pattern1 } from './components/Background'
const Parent = () => {
  return (
   <Pattern1>
     <div className='min-h-screen w-full '>
     <Navbar className="w-full" />
     <Outlet className="w-full" />
    </div>
   </Pattern1>
  )
}

export default Parent
