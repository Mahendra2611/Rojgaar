import React from 'react'
import { filter } from '../utils/filter'
import Input from './Input'
import { addFilter,removeFilter } from '../redux/JobSlice'
import { useDispatch } from 'react-redux'
const FilterOption = () => {
  const dispatch = useDispatch();
  const addValue = (e)=>{
    //console.log(e)
    const value = e.target.value;
    dispatch(addFilter(value))
  }
  const removeValue  = (e)=>{
    const value = e.target.value;
    dispatch(removeFilter(value))
  }
  return (
    <div className='text-white space-y-5'>
      {
        filter.map((data)=>(
            <div>
                <h1 className='text-2xl font-bold space-x-2'>{data.name}</h1>
           {
             data.options.map((option)=>(
                <Input value={option} id={data.name.toLowerCase()} addValue={addValue} removeValue={removeValue}/>
             ))
           }
            </div>
        ))
      }
    </div>
  )
}

export default FilterOption
