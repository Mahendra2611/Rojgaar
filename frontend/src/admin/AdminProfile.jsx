import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const AdminProfile = () => {
  const user = useSelector((state)=>state.user.user)
  console.log(user)
const navigate = useNavigate();
const handleEdit = ()=>{
    navigate("/editadminprofile")
}
  return (
   <div className=''>
     <div
      className="p-6 max-w-sm mx-auto rounded-lg shadow-lg"
      style={{ background: 'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)' }}
    >
      <div className="flex justify-end">
        <button onClick={handleEdit} className="text-white bg-blue-500 rounded-lg  px-2">
          Edit
        </button>
      </div>
      <div className="text-center ">
        <img
          className="w-32 h-32 mx-auto rounded-full"
          src={user?.profile?.profilePhoto}
          alt="U"
        />
        <h2 className="text-2xl font-bold pb-1 mt-4">{user?.fullName}</h2>
        <p className="text-gray-700 pb-1">{user?.role}</p>
        <p className="text-gray-700 pb-1">{user?.email}</p>
        <p className="text-gray-700">{user?.phoneNumber}</p>
      </div>
      
      </div>
   </div>
  );
};

export default AdminProfile;
