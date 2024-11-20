
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Signup from "./components/Signup"
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
import InternShip from "./user/InternShip"
import Error from "./components/Error"
import SavedJob from "./user/SavedJob"
import CommingSoon from "./components/CommingSoon"
import Home2 from "./admin2/Home2"
import AdminProtected2 from "./admin2/AdminProtected2"
import AdminJobCreate from "./admin2/AdminJobCreate"
import AdminJobUpdate from "./admin2/AdminJobUpdate"
import ForgotPassword from "./components/ForgotPassword"
import OTPVerification from "./components/OTPVerification"
import UpdatePwd from "./components/UpdatePwd"
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
      element:<AdminProtected><RecruiterLandingPage/></AdminProtected>,
      errorElement:<Error/>,
    },

    {
      path:"adminprofile",
      element:<AdminProtected><AdminProfile/></AdminProtected>,
      errorElement:<Error/>,
    },
    {
      path:"editprofile",
      element:<EditProfile/>,
      errorElement:<Error/>,
    },
    {
      path:"editadminprofile",
      element:<AdminProtected><EditAdminProfile/></AdminProtected>,
      errorElement:<Error/>,
    },
    {
      path:"company",
      element:<AdminProtected><Companies/></AdminProtected>,
      errorElement:<Error/>,
    },
    {
      path:"/company/create",
      element:<AdminProtected><CompanyCreate/></AdminProtected>,
      errorElement:<Error/>,
    },
    {
      path:"/company/update/:id",
      element:<AdminProtected><CompanyUpdate/></AdminProtected>,
      errorElement:<Error/>,
    },
    {
      path:"job",
      element:<AdminProtected><Job/></AdminProtected>,
      errorElement:<Error/>,
    },
    {
      path:"/job/create",
      element:<AdminProtected><JobCreate/></AdminProtected>,
      errorElement:<Error/>,
    },
    {
      path:"/job/update/:id",
      element:<AdminProtected><JobUpdate/></AdminProtected>,
      errorElement:<Error/>,
    },
    {
      path:"/job/applicant/:jobId",
      element:<AdminProtected><ApplicantTable/></AdminProtected>,
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
      element:<InternShip/>,
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
  element:<AdminProtected2><Home2/></AdminProtected2>,
  errorElement:<Error/>
  
},
{
  path:"/admin2/jobCreate",
  element:<AdminProtected2><AdminJobCreate/></AdminProtected2>,
  errorElement:<Error/>
  
},
{
  path:"/Admin2/jobUpdate/:id",
  element:<AdminProtected2><AdminJobUpdate/></AdminProtected2>,
  errorElement:<Error/>
},

])
  return (
   <RouterProvider router={AppRouter}/>
  )
}

export default App
