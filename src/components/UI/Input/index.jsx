import React from 'react'
import './style.css'

const Input = ({onChange, label, placeholder = "", type = "text" , className, wrapper}) => {
  return (
    <div className='flex flex-col items-start w-full'>
        <div className={`${wrapper} flex flex-col items-start gap-1 w-full`}>
        <label htmlFor={label.toLowerCase()}>{label}</label>
            <input type={type} name={label.toLowerCase()} id={label.toLowerCase()} placeholder={placeholder} className={`${className} flex p-1 w-full`} onChange={(e) => onChange(e.target.value)}/></div>
    </div>
  )
}

export default Input