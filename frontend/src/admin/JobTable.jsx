import React from 'react';
//import { FaEdit } from 'react-icons/fa'; // Importing an edit icon
import { Link, useNavigate } from 'react-router-dom';
import { CustomButtonRed } from '../components/CustomButton';
const JobTable = ({ job ,deleteJob}) => {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-x-scroll shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
          <tr>
            <th scope="col" className="px-6 py-3 text-neutral-900 font-serif text-xs md:text-xl font-bold">Name</th>
            <th scope="col" className="px-6 py-3 text-neutral-900 font-serif text-xs md:text-xl font-bold">Role</th>
            <th scope="col" className="px-6 py-3 text-neutral-900 font-serif  text-xs md:text-xl font-bold">Date</th>
            <th scope="col"className="px-6 py-3 text-neutral-900 font-serif text-xs md:text-xl font-bold">Action</th>
            <th scope="col" className="px-6 py-3 text-neutral-900 font-serif text-xs md:text-xl font-bold">Delete Job</th>
          </tr>
        </thead>
        <tbody className='text-[12px] md:text-[16px] text-center'>
          {job &&  job?.map((job, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-blue-500 border-b border-blue-400' : 'bg-blue-600 border-b border-blue-400'}>
              <td className="px-2 md:px-6 py-4">{job?.company?.name}</td>
              <td className="px-2 md:px-6 py-4">{ job?.title}</td>
              <td className="px-2 md:px-6 py-4">{ job?.createdAt?.split('T')[0]
              }</td>
              <td className="px-6 py-4 space-x-4">
                <Link onClick={()=>{navigate(`/job/update/${index}`)}} to="#" className="underline font-medium text-red-200 ">
                 Edit
                </Link>
                <Link onClick={()=>{navigate(`/job/applicant/${job._id}`)}} to="#" className="font-medium text-green-200 underline">
                 Applicant
                </Link>
              </td>
              <td><CustomButtonRed onClick={()=>{deleteJob(job._id,index)}}>Delete</CustomButtonRed></td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
