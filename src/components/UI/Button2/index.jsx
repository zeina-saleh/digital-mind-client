import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button2 = ({ text, onClick, classname, enabled = true, icon }) => {
    const clickHandler = (e) => {
        e.preventDefault()
        if (enabled) {
            onClick();
        }
    };
    return (
        <div className={`${classname} flex h-9 p-1 px-3 items-center justify-center rounded-l-full rounded-r-full font-medium cursor-pointer  hover:bg-white button2`}
            onClick={(e) => clickHandler(e)}>
            <div className='flex items-center justify-evenly gap-2'>
            <FontAwesomeIcon icon={icon} className='text-[#1ED690] '/>
                <p>{text}</p>
            </div>
        </div >
    )
}

export default Button2