import React from 'react';
//import { FaEdit } from 'react-icons/fa'; // Importing an edit icon
import { Link, useNavigate } from 'react-router-dom';

const CompanyTable = ({ companies }) => {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
          <tr>
            <th scope="col" className="px-6 py-3">Logo</th>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Date</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {companies &&  companies?.map((company, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-blue-500 border-b border-blue-400' : 'bg-blue-600 border-b border-blue-400'}>
              <td className="px-6 py-4"><img className='w-[80px] h-[80px] rounded-full ' src={company?.logo} alt='logo'/></td>
              <td className="px-6 py-4">{ company?.name}</td>
              <td className="px-6 py-4">{ company?.createdAt?.split('T')[0]
              }</td>
              <td className="px-6 py-4">
                <Link onClick={()=>{navigate(`/company/update/${index}`)}} to="#" className="font-medium text-white hover:underline">
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

export default CompanyTable;
