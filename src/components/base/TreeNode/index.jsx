import React from 'react'
import './style.css'

const TreeNode = (props) => {
    const width = 100;
    const height = 20;

    const isLeftSide= (props.phi > Math.PI / 2) && (props.phi < 3 * Math.PI / 2)
    let x = props.x;
    let textAlign = "t-right"
    let textOffset = 3
    
    if(isLeftSide) {
        x -= width 
        textAlign="t-left" 
        textOffset = -3}
    if(props.level === 0){ 
        textAlign = "t-middle" 
        textOffset=0 }

    const root = <circle className='containerr' cx={props.x} cy={props.y} r="40" fill="none" stroke="#1e1e1e"></circle>
    const child = <rect className='containerr' rx="3" x={x} y={props.y - height/2}
    width={width} height={height} fill='none' stroke='#1e1e1e'/>
    const element = props.level === 0 ? root : child

    return (
        <g>
            {element}
            <text className={`text ${textAlign}`} x={props.x + textOffset} y={props.y}>{props.caption}</text>
        </g>
    )
}

export default TreeNode