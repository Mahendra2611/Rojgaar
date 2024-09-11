import React from 'react'
import { filter } from '../utils/filter'
import Input from './Input'
const FilterOption = () => {
  return (
    <div className='text-white space-y-5'>
      {
        filter.map((data)=>(
            <div>
                <h1 className='text-2xl font-bold'>{data.name}</h1>
           {
             data.options.map((option)=>(
                <Input value={option} id={data.name.toLowerCase} />
             ))
           }
            </div>
        ))
      }
    </div>
  )
}

export default FilterOption
