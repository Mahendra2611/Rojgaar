import React from 'react'

const Input = ({id,value,addValue,removeValue}) => {
  const handlChange = (e)=>{
      if(e.target.checked){
        addValue(e);
      }
      else{
        removeValue(e);
      }
  }
  return (
   
    <div className='space-x-2 w-full'>
      <input type='checkbox' onChange={handlChange} id={id} name={id} value={value}/>
       <label htmlFor={id}>{value}</label>
    </div>
  )
}

export default Input
