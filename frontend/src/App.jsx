
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Home from "./components/Home"
import Loader from "./components/Loader"
import React, { Suspense } from "react"
import EditProfile from "./components/EditProfile"
 
const EditAdminProfile = React.lazy(()=>import("./admin/EditAdminProfile"))
import Profile from "./components/Profile"
const AdminProfile = React.lazy(()=>import("./admin/AdminProfile"))
import Parent from "./Parent"
const Companies = React.lazy(() => import('./admin/Companies'));
const CompanyCreate = React.lazy(() => import('./admin/CompanyCreate'));
const CompanyUpdate = React.lazy(() => import('./admin/CompanyUpdate'));
const ApplicantTable = React.lazy(() => import('./admin/ApplicantTable'));
const Job = React.lazy(() => import('./admin/Job'));
const JobCreate = React.lazy(() => import('./admin/JobCreate'));
const JobUpdate = React.lazy(() => import('./admin/JobUpdate'));
const RecruiterLandingPage = React.lazy(() => import('./admin/RecruiterLandingPage'));
import UserJob from "./user/UserJob"
import JobDetails from "./user/JobDetails"
import AllJobs from "./user/AllJobs"

const AdminProtected = React.lazy(()=>import("./admin/AdminProtected"))
import Logout from "./components/Logout"


import Error from "./components/Error"
import SavedJob from "./user/SavedJob"
import CommingSoon from "./components/CommingSoon"
const Home2 = React.lazy(() => import('./admin2/Home2'));
const AdminProtected2 = React.lazy(() => import('./admin2/AdminProtected2'));
const AdminJobCreate = React.lazy(() => import('./admin2/AdminJobCreate'));
const AdminJobUpdate = React.lazy(() => import('./admin2/AdminJobUpdate'));

import ForgotPassword from "./components/ForgotPassword"
import OTPVerification from "./components/OTPVerification"
import UpdatePwd from "./components/UpdatePwd"
// import InternShip from "./user/InternShip"
 const  InternShip = React.lazy(()=>import("./user/InternShip"))

function App() {
const AppRouter = createBrowserRouter([
  {
  path:"/",
  element:<Parent/>,
  errorElement:<Error/>,
  children:[
    {
      path:"/",
      element:<Home/>,
      errorElement:<Error/>,
    },
    {
      path:"profile",
      element:<Profile/>,
      errorElement:<Error/>,
    },
    {
      path:"admin/home",
      element:(<Suspense fallback={<Loader/>}><AdminProtected><RecruiterLandingPage/></AdminProtected></Suspense>),
      errorElement:<Error/>,
    },

    {
      path:"adminprofile",
      element:(<Suspense fallback={<Loader/>}><AdminProtected><AdminProfile/></AdminProtected></Suspense>),
      
      errorElement:<Error/>,
    },
    {
      path:"editprofile",
      element:<EditProfile/>,
      errorElement:<Error/>,
    },
    {
      path:"editadminprofile",
      element:(<Suspense fallback={<Loader/>}><AdminProtected><EditAdminProfile/></AdminProtected></Suspense>),
      
      errorElement:<Error/>,
    },
    {
      path:"company",
      element:(<Suspense fallback={<Loader/>}><AdminProtected><Companies/></AdminProtected></Suspense>),
      
      errorElement:<Error/>,
    },
    {
      path:"/company/create",
      element:(<Suspense fallback={<Loader/>}><AdminProtected><CompanyCreate/></AdminProtected></Suspense>),
     
      errorElement:<Error/>,
    },
    {
      path:"/company/update/:id",
      element:(<Suspense fallback={<Loader/>}><AdminProtected><CompanyUpdate/></AdminProtected></Suspense>),
     
      errorElement:<Error/>,
    },
    {
      path:"job",
      element:(<Suspense fallback={<Loader/>}><AdminProtected><Job/></AdminProtected></Suspense>),
     
      errorElement:<Error/>,
    },
    {
      path:"/job/create",
      element:(<Suspense fallback={<Loader/>}><AdminProtected><JobCreate/></AdminProtected></Suspense>),
     
      errorElement:<Error/>,
    },
    {
      path:"/job/update/:id",
      element:(<Suspense fallback={<Loader/>}><AdminProtected><JobUpdate/></AdminProtected></Suspense>),
     
      errorElement:<Error/>,
    },
    {
      path:"/job/applicant/:jobId",
      element:(<Suspense fallback={<Loader/>}><AdminProtected><ApplicantTable/></AdminProtected></Suspense>),
     
      errorElement:<Error/>,
    },
    {
      path:"user/jobs/:filter?",
      element:<UserJob/>,
      errorElement:<Error/>,
    },
    {
      path:"user/jobs/deatils/:id",
      element:<JobDetails/>,
      errorElement:<Error/>,
    },
    {
      path:"user/intern",
      element:(<Suspense fallback={<Loader/>}><InternShip/>,</Suspense>),
      errorElement:<Error/>,
    },
    {
      path:"user/savedjobs",
      element:<SavedJob/>,
      errorElement:<Error/>,
    },{
      path:"/user/resume",
      element:<CommingSoon/>,
      errorElement:<Error/>
    }
   
  ]
},
{
  path:"/signup",
  element:<Signup/>,
  errorElement:<Error/>,
},
{
  path:"/signin",
  element:<Signin/>,
  errorElement:<Error/>,
},
{
  path:"/forgotpassword",
  element:<ForgotPassword/>,
  errorElement:<Error/>
},
{
  path:"/OTP_Verfication",
  element:<OTPVerification/>,
  errorElement:<Error/>

},
{
  path:"/updatePwd",
  element:<UpdatePwd/>,
  errorElement:<Error/>

},
{
  path:"/error",
  element:<Error/>
},
{
  path:"/logout",
  element:<Logout/>,
  errorElement:<Error/>,
},
{
  path:"/admin2/home",
  element:(<Suspense fallback={<Loader/>}><AdminProtected2><Home2/></AdminProtected2></Suspense>),
  errorElement:<Error/>
  
},
{
  path:"/admin2/jobCreate",
  element:(<Suspense fallback={<Loader/>}><AdminProtected2><AdminJobCreate/></AdminProtected2></Suspense>),
 
  errorElement:<Error/>
  
},
{
  path:"/Admin2/jobUpdate/:id",
  element:(<Suspense fallback={<Loader/>}><AdminProtected2><AdminJobUpdate/></AdminProtected2></Suspense>),
  errorElement:<Error/>
},

])
  return (
   <RouterProvider router={AppRouter}/>
  )
}

export default App
