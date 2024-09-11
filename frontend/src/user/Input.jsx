import React from 'react'

const Input = ({id,value}) => {
  return (
    <div>
      <input type='checkbox' id={id} name={id} />
       <label htmlFor={id}>{value}</label>
    </div>
  )
}

export default Input
