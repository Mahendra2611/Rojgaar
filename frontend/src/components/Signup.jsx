import React from 'react';
import { useRef } from 'react';
import { verify } from '../hooks/verify';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { USER_END_POINT } from '../utils/constants';
import Loader from './Loader';
import { toggleLoader } from '../redux/loaderSlice';
import { addUser } from '../redux/userSlice';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const refs = {
        name: useRef(null),
        email: useRef(null),
        password: useRef(null),
        phone: useRef(null),
        role: useRef(null),
      };

      const disptach = useDispatch();
      const loader = useSelector((state)=>state.loader.loader)
      const navigate = useNavigate();

      const handleSubmit = async(event)=>{
        //console.log("handleSubmit")
        event.preventDefault();
       // console.log(refs.password.current.value)
        try {
          const [isEmail,isPassword,isPhone] =  verify(refs.email.current.value,refs.password.current.value,refs.phone.current.value);
        if(!isEmail||!isPassword || !isPhone){
           if(!isEmail) toast.error("Email is incorrect")
            if(!isPassword) toast.error("Password is incorrect")
              if(!isPhone) toast.error("Phone number is incorrect")
                return;
        }
       
        const userData = {
          fullName:refs.name.current.value,
          email:refs.email.current.value,
          password:refs.password.current.value,
          phoneNumber:refs.phone.current.value,
          role:refs.role.current.value
        }
        disptach(toggleLoader(true));
       const response = await fetch("http://localhost:3000/user/register",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            
          },
          body:JSON.stringify(userData)
        })
        const data = await response.json();
        //console.log(data);
        if(data.user.role === "recruiter"){
          navigate("/admin/home")
        }
        else if(data.user.role === "student"){
          APIreq();
          navigate("/")
        }
        else{
          navigate("/error")
        }
       
        } catch (error) {
          //console.log(error);
          toast.error("Someting went wrong")
        }
        finally{
          disptach(toggleLoader(false))
          
        }
      }
  return loader?<Loader/>:(
    <div className="flex items-center justify-center min-h-[100dvh] bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-8">
      <div className="w-full max-w-md p-6 bg-[#1e293b] border-0 shadow-lg rounded-lg">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white">Sign Up</h2>
          <p className="text-gray-400">Create your account to get started.</p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  ">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-white">
                Full Name
              </label>
              <input
              ref={refs.name}
                id="fullName"
                placeholder="John Doe"
                className="w-full p-2 h-8 sm:h-10 border border-gray-300 rounded"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                 
                id="email"
                ref={refs.email}
                type="email"
                placeholder="example@email.com"
                className="w-full p-2 h-8 sm:h-10 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-white">
              Phone Number
            </label>
            <input
              id="phone"
              ref={refs.phone}
              type="tel"
              placeholder="+1 (555) 555-5555"
              className="w-full p-2 h-8 sm:h-10 border border-gray-300 rounded"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <input
              id="password"
              ref={refs.password}
              type="password"
              className="w-full p-2 h-8 sm:h-10 border border-gray-300 rounded"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="role" className="text-white">
              Role
            </label>
            <select
              id="role"
              ref={refs.role}
              className="w-full px-2 sm:p-2 text-[14px] h-8 sm:h-10 border border-gray-300 rounded"
            >
              <option className='text-[16px]' value=""  disabled defaultChecked>
                Select your role
              </option>
              <option value="student" >Student</option>
              <option value="recruiter">Recruiter</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <button
          onClick={handleSubmit}
            type="submit"
            className="w-full p-2 h-8 sm:h-10 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center"
          >
            Sign Up
          </button>
        </div>
      </div>
      <ToastContainer
position="top-right"
autoClose={4000}
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
  );
};

export default Signup;
