import React from 'react'
import './style.css'

const Input = ({onChange, label, placeholder = "", type = "text"}) => {
  return (
    <div className='flex flex-col items-start'>
        <div className='input-wrapper flex flex-col items-start gap-1 w-full'>
        <label htmlFor={label.toLowerCase()}>{label}</label>
            <input type={type} name={label.toLowerCase()} id={label.toLowerCase()} placeholder={placeholder} className='text-input p-1 w-80' onChange={(e) => onChange(e.target.value)}/></div>
    </div>
  )
}

export default Input