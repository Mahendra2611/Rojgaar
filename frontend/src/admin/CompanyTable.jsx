import React from 'react';
//import { FaEdit } from 'react-icons/fa'; // Importing an edit icon
import { Link, useNavigate } from 'react-router-dom';

const CompanyTable = ({ companies,deleteCompnay }) => {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs  uppercase font-serif md:text-xl text-slate-700 bg-blue-600 dark:text-white">
          <tr>
            <th scope="col" className="px-6 py-3 text-slate-900">Logo</th>
            <th scope="col" className="px-6 py-3 text-slate-900">Name</th>
            <th scope="col" className="px-6 py-3 text-slate-900">Date</th>
            <th scope="col" className="px-6 py-3 text-slate-900">Action</th>
            <th scope="col" className="px-6 py-3 text-slate-900">Delete</th>
          </tr>
        </thead>
        <tbody>
          {companies &&  companies?.map((company, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-blue-500 border-b text-[14px] md:text-[16px] border-blue-400' : 'bg-blue-600 border-b border-blue-400'}>
              <td className="px-6 py-4"><img className='w-auto h-auto max-w-[100px] max-h-[100px] object-contain rounded-full ' src={company?.logo} alt='logo'/></td>
              <td className="px-6 py-4 text-[16px]">{ company?.name}</td>
              <td className=" px-0 mdpx-6 py-4">{ company?.createdAt?.split('T')[0]
              }</td>
              <td className="px-6 py-4">
                <Link onClick={()=>{navigate(`/company/update/${index}`)}} to="#" className="font-medium text-red-600 hover:underline">
                 Edit
                </Link>
              </td>
              <td><button onClick={()=>{deleteCompnay(company._id,index)}} className='bg-red-600 text-white px-2 py-1 rounded-2xl text-xl'>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
