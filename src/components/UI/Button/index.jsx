import React from 'react'

const Button = ({ text, onClick, classname, enabled = true }) => {
    const clickHandler = () => {
        if (enabled) {
            onClick();
        }
    };
    return (
        <button className={`${classname} bg-[#20E399] w-[100px] h-10 rounded-l-full rounded-r-full font-medium`}
            onClick={() => clickHandler()}>{text}</button>
    )
}

export default Button