import React from 'react'
import './style.css'

const Input = ({onChange, label, placeholder = "", type = "text", value=""}) => {
  return (
    <div className='flex flex-col items-start w-full'>
        <div className={`wrapper2 flex flex-col items-start gap-1 w-full`}>
        <label className='px-2 font-medium' htmlFor={label.toLowerCase()}>{label}</label>
            <input type={type} name={label.toLowerCase()} defaultValue={value} id={label.toLowerCase()} placeholder={placeholder} className={`input2 flex p-1 px-2 w-full`} onChange={(e) => onChange( e.target.value )}/></div>
    </div>
  )
}

export default Input