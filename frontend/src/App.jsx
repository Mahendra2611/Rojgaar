
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Signup from "./components/SIgnup"
import Signin from "./components/Signin"
import Home from "./components/Home"
import Loader from "./components/Loader"

import EditProfile from "./components/EditProfile"
import EditAdminProfile from "./admin/EditAdminProfile"
import Profile from "./components/Profile"
import AdminProfile from "./admin/AdminProfile"
import Parent from "./Parent"
import Companies from "./admin/Companies"
import CompanyCreate from "./admin/CompanyCreate"
import CompanyUpdate from "./admin/CompanyUpdate"
import ApplicantTable from "./admin/ApplicantTable"
import Job from "./admin/Job"
import JobCreate from "./admin/JobCreate"
import JobUpdate from "./admin/JobUpdate"
import UserJob from "./user/UserJob"
import JobDetails from "./user/JobDetails"
import AllJobs from "./user/AllJobs"
import AdminProtected from "./admin/AdminProtected"
import Logout from "./components/Logout"
import RecruiterLandingPage from "./admin/RecruiterLandingPage"
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
      path:"admin/home",
      element:<AdminProtected><RecruiterLandingPage/></AdminProtected>
    },

    {
      path:"adminprofile",
      element:<AdminProtected><AdminProfile/></AdminProtected>
    },
    {
      path:"editprofile",
      element:<EditProfile/>
    },
    {
      path:"editadminprofile",
      element:<AdminProtected><EditAdminProfile/></AdminProtected>
    },
    {
      path:"company",
      element:<AdminProtected><Companies/></AdminProtected>
    },
    {
      path:"/company/create",
      element:<AdminProtected><CompanyCreate/></AdminProtected>
    },
    {
      path:"/company/update/:id",
      element:<AdminProtected><CompanyUpdate/></AdminProtected>
    },
    {
      path:"job",
      element:<AdminProtected><Job/></AdminProtected>
    },
    {
      path:"/job/create",
      element:<AdminProtected><JobCreate/></AdminProtected>
    },
    {
      path:"/job/update/:id",
      element:<AdminProtected><JobUpdate/></AdminProtected>
    },
    {
      path:"/job/applicant/:jobId",
      element:<AdminProtected><ApplicantTable/></AdminProtected>
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
    },
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
{
  path:"/logout",
  element:<Logout/>
}
])
  return (
   <RouterProvider router={AppRouter}/>
  )
}

export default App
