import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
const Parent = () => {
  return (
    <div className='min-h-screen w-screen overflow-hidden'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Parent
