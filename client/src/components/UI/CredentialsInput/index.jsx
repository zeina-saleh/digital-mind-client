import React from 'react'

const CredentialsInput = ({ onChange, label, placeholder = "", type = "text" }) => {
    return (
        <div className='flex flex-col items-start w-full'>
            <div className={`wrapper flex flex-col items-start gap-1 w-full`}>
                <label className=' font-medium' htmlFor={label.toLowerCase()}>{label}</label>
                <input type={type} name={label.toLowerCase()} id={label.toLowerCase()} placeholder={placeholder} className={`input flex p-1 px-2 w-full`} onChange={(e) => onChange(e.target.value)} /></div>
        </div>
    )
}

export default CredentialsInput