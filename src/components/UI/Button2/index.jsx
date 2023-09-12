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
        <div className={`${classname} p-1 items-center justify-center rounded-l-full rounded-r-full font-medium cursor-pointer button2`}
            onClick={(e) => clickHandler(e)}>
            <div className='flex items-center justify-evenly'>
                <p>{text}</p>
                <FontAwesomeIcon icon={icon} style={{ color: "#20E399", }} />
            </div>
        </div >
    )
}

export default Button2