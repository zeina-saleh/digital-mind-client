import React from 'react'
import './style.css'

const Button = ({ text, onClick, classname, enabled = true }) => {
    const clickHandler = (e) => {
        e.preventDefault()
        if (enabled) {
            onClick();
        }
    };
    return (
        <button className={`${classname} bg-[#1ED690] btn-primary text-white font-semibold rounded-l-full rounded-r-full hover:brightness-90`}
            onClick={(e) => clickHandler(e)}>{text}</button>
    )
}

export default Button