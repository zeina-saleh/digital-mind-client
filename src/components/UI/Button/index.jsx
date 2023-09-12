import React from 'react'

const Button = ({ text, onClick, classname, enabled = true }) => {
    const clickHandler = (e) => {
        e.preventDefault()
        if (enabled) {
            onClick();
        }
    };
    return (
        <button className={`${classname} bg-[#20E399] rounded-l-full rounded-r-full font-medium`}
            onClick={(e) => clickHandler(e)}>{text}</button>
    )
}

export default Button