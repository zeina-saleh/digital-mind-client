import React from 'react'
import './style.css'

const Input = ({onChange, label, placeholder = "", type = "text" }) => {
  return (
    <div className='flex flex-col items-start'>
        <div className='input-wrapper flex flex-col items-start gap-1 w-full'>
        <label htmlFor="input">{label}</label>
            <input type={type} id='input' placeholder={placeholder} className='text-input p-1 w-80'/></div>
    </div>
  )
}

export default Input