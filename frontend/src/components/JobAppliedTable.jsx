import React from 'react';
//import { FaEdit } from 'react-icons/fa'; // Importing an edit icon
import { Link, useNavigate } from 'react-router-dom';

const  JobAppliedTable = ({ job }) => {
  const navigate = useNavigate();
  return job?.length === 0 ? (<h1 className='text-xl text-cyan-500'>You have not applied Yet</h1>):(
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right ">
        <thead className="text-xs md:text-xl font-sans text-black uppercase bg-blue-600">
          <tr>
            <th scope="col" className="px-6 py-3">Date</th>
            <th scope="col" className="px-6 py-3">Job Role</th>
            <th scope="col" className="px-6 py-3">Company</th>
            <th scope="col" className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {job?.length>0 &&  job?.map((job, index) => (
            <tr key={index} className={`font-serif text-xs md:text-lg text-white ${index % 2 === 0 ? 'bg-blue-500 border-b  border-blue-400' : 'bg-blue-600 border-b border-blue-400'}`}>
              <td className="px-1 md:px-6 py-4">{ job?.createdAt?.split('T')[0]}</td>
              <td className="px-6 py-4">{ job?.job?.title}</td>
              <td className="px-6 py-4">{ job?.job?.company?.name}</td> 
              <td > <p className={ `px-4 py-1 text-center rounded-lg inline-block text-slate-900 text-xs md:text-lg font-semibold ${(job?.status === 'accepted')?'bg-green-400':(job?.status === 'rejected')?'bg-red-400':'bg-yellow-300'}`}>{ job?.status}</p></td>
            
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobAppliedTable;
