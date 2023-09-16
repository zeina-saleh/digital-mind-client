import React from 'react'
import './style.css'

const Input2 = ({onChange, label, placeholder = "", type = "text", accept= undefined , className, wrapper}) => {
  return (
    <div className='flex flex-col items-start w-full'>
        <div className={`${wrapper} flex flex-col items-start gap-1 w-full`}>
        <label className='px-2 font-medium' htmlFor={label.toLowerCase()}>{label}</label>
            <input type={type} accept={accept} name={label.toLowerCase()} id={label.toLowerCase()} placeholder={placeholder} className={`${className} flex p-1 px-2 w-full`} onChange={(e) => onChange( e.target.files[0] )}/></div>
    </div>
  )
}

export default Input2