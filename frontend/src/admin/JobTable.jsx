import React from 'react';
//import { FaEdit } from 'react-icons/fa'; // Importing an edit icon
import { Link, useNavigate } from 'react-router-dom';
import { editJob } from '../hooks/editJob';

const JobTable = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
          <tr>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Role</th>
            <th scope="col" className="px-6 py-3">Date</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {job &&  job?.map((job, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-blue-500 border-b border-blue-400' : 'bg-blue-600 border-b border-blue-400'}>
              <td className="px-6 py-4">{job?.company?.name}</td>
              <td className="px-6 py-4">{ job?.title}</td>
              <td className="px-6 py-4">{ job?.createdAt?.split('T')[0]
              }</td>
              <td className="px-6 py-4">
                <Link onClick={()=>{navigate(`/job/update/${index}`)}} to="#" className="font-medium text-white hover:underline">
                 Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
