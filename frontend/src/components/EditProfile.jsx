import React, { useState ,useRef} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { toast,ToastContainer } from 'react-toastify';
import { toggleLoader } from '../redux/userSlice';
import { addUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
const EditProfile= () => {
    const userData = useSelector((state)=>state.user.user)
    const loader = useSelector((state)=>state.user.loader)
const dispatch = useDispatch();
const navigate = useNavigate();
    console.log(userData)
    const [user, setUser] = useState({
        photo: "",
        name: userData?.fullName||"",
        email: userData?.email||"",
        phone: userData?.phoneNumber||"",
        skills: userData?.profile?.skills||[],
        bio:userData?.profile?.bio||"",
        resume:"" ,
      });
      const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the actual file object
        const maxSize = 500*1024;
        console.log(file);
        if(file && file.size > maxSize){
          toast("File size exceeded")
          return;
        }
        if (e.target.name === 'photo') {
            setUser({ ...user, photo: file }); // Set the File object in the state
        } else if (e.target.name === 'resume') {
            setUser({ ...user, resume: file }); // Set the File object in the state
        }
    };
    
    //  const handleFile = (e)=>{
    //   console.log(e.target.files)
    //   const file = e.target.files[0];
    //   setFiletoBase(file);
    //   console.log(file)
    //  }
    //  const setFiletoBase = (file)=>{
    //   const reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onloadend = ()=>{
    //     setUser({...user,
    //       photo:reader.result
    //     })
    //   }
    //  }
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
      };
    
      const handleSkillChange = (index, value) => {
        const updatedSkills = [...user.skills];
        updatedSkills[index] = value;
        setUser({ ...user, skills: updatedSkills });
      };
    
      const handleAddSkill = () => {
        setUser({ ...user, skills: [...user.skills, ''] });
      };
    
      const handleRemoveSkill = (index) => {
        const updatedSkills = user.skills.filter((_, i) => i !== index);
        setUser({ ...user, skills: updatedSkills });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("fullName", user.name || "");
       
        formData.append("phoneNumber", user.phone || "");
        formData.append("bio", user.bio || "");
        formData.append("profilePhoto", user.photo || "");
        formData.append("resume", user.resume || "");

        // Append skills as individual entries
        user.skills.forEach((skill, index) => {
            formData.append(`skills[${index}]`, skill);
        });
        formData.forEach((value,key)=>{
          console.log(`${key}:${value}`)
        })
        try {
          dispatch(toggleLoader(true));
          console.log("request send")
            const response = await fetch("http://localhost:3000/user/profile/update", {
                method: "POST",
                credentials: "include",
                body: formData
            });

            if (response.ok) {
              const data = await response.json();
              console.log(data)
dispatch(addUser(data.user))
                console.log("Data sent successfully");
                navigate("/profile")
            } else {
                console.log("Data couldn't be sent successfully");
            }
        } catch (error) {
            console.log(error);
        }
        finally{
          dispatch(toggleLoader(false));
        }
    };
    
      return loader ? <Loader/>:(
        
        <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Photo URL</label>
              <input
                type="file"
                name="photo"
               
                onChange={handleFileChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Bio</label>
              <input
                type="text"
                name="bio"
                value={user.bio}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700">Skills</label>
              {user && user.skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(index)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddSkill}
                className="text-blue-500"
              >
                Add Skill
              </button>
            </div>
            <div>
              <label className="block text-gray-700">Resume URL</label>
              <input
                type="file"
                name="resume"
               
                onChange={handleFileChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded"
            >
              Save Changes
            </button>
          </form>
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
    
    export default EditProfile