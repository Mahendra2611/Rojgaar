
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Signup from "./components/SIgnup"
import Signin from "./components/Signin"
import Home from "./components/Home"
import Loader from "./components/Loader"

import EditProfile from "./components/EditProfile"
import Profile from "./components/Profile"
import Parent from "./Parent"
import Companies from "./admin/Companies"
import CompanyCreate from "./admin/CompanyCreate"
import CompanyUpdate from "./admin/CompanyUpdate"
import Job from "./admin/Job"
import JobCreate from "./admin/JobCreate"
import JobUpdate from "./admin/JobUpdate"
import UserJob from "./user/UserJob"
import JobDetails from "./user/JobDetails"
import AllJobs from "./user/AllJobs"
function App() {
const AppRouter = createBrowserRouter([
  {
  path:"/",
  element:<Parent/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"profile",
      element:<Profile/>
    },
    {
      path:"editprofile",
      element:<EditProfile/>
    },
    {
      path:"company",
      element:<Companies/>
    },
    {
      path:"/company/create",
      element:<CompanyCreate/>
    },
    {
      path:"/company/update/:id",
      element:<CompanyUpdate/>
    },
    {
      path:"job",
      element:<Job/>
    },
    {
      path:"/job/create",
      element:<JobCreate/>
    },
    {
      path:"/job/update/:id",
      element:<JobUpdate/>
    },
    {
      path:"user/jobs/:filter?",
      element:<UserJob/>
    },
    {
      path:"user/jobs/deatils/:id",
      element:<JobDetails/>
    },
    {
      path:"user/alljobs",
      element:<AllJobs/>
    }
  ]
},
{
  path:"/signup",
  element:<Signup/>
},
{
  path:"/signin",
  element:<Signin/>
},

])
  return (
   <RouterProvider router={AppRouter}/>
  )
}

export default App
