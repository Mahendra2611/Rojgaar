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
const Signin = () => {
    const refs = {
      
        email: useRef(null),
        password: useRef(null),
       role:useRef(null)
      };

      const disptach = useDispatch();
      const loader = useSelector((state)=>state.loader.loader)

      const navigate = useNavigate();

      const handleSubmit = async(event)=>{
        console.log("handleSubmit")
        event.preventDefault();
        console.log(refs.password.current.value)
        try {
          const [isEmail,isPassword] =  verify(refs.email.current.value,refs.password.current.value);
        if(!isEmail||!isPassword ){
           if(!isEmail) toast.error("Email is incorrect")
            if(!isPassword) toast.error("Password is incorrect")
             
                return;
        }
       
        const userData = {
         
          email:refs.email.current.value,
          password:refs.password.current.value,
        
          role:refs.role.current.value
        }
        disptach(toggleLoader(true));
        const response = await fetch("http://localhost:3000/user/login", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
          // <--- Added to include cookies
        });
        
        
        

        const data = await response.json();
        console.log(data);
        if(data.success){
         
          sessionStorage.clear();
          disptach(addUser(data.user));
          if(data.user.role === "recruiter"){
            navigate("/admin/home")
          }
          else{
            navigate("/")
          }
        }
        else{
          toast.error(data.message)
          sessionStorage.clear();
        }
        } catch (error) {
          console.log(error);
          toast.error("Someting went wrong")
          sessionStorage.clear();
        }
        finally{
          disptach(toggleLoader(false))
          
        }
      }
  return loader?<Loader/>:(
    <div className="flex items-center justify-center min-h-[100dvh] bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-8">
      <div className="w-full max-w-md p-6 bg-[#1e293b] border-0 shadow-lg rounded-lg">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white">Sign in</h2>
          <p className="text-gray-400"></p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1  gap-4  ">
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
            Sign In
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
}

export default Signin
