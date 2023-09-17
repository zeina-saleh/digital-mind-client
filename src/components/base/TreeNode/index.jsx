import React from 'react'
import './style.css'

const TreeNode = (props) => {
    const width = 100;
    const height = 20;
    const root = <circle className='containerr' cx={props.x} cy={props.y} r="40" fill="none" stroke="#1e1e1e"></circle>
    const child = <rect className='containerr' rx="3" x={props.x} y={props.y - height/2}
    width={width} height={height} fill='none' stroke='#1e1e1e'/>
    const element = props.level === 0 ? root : child

    return (
        <g>
            {element}
            <text className='text' x={props.x} y={props.y}>{props.caption}</text>
        </g>
    )
}

export default TreeNode