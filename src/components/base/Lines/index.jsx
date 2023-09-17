import React from 'react';

const Lines = (props) => {
    const level = props.level;
    const DX = props.isLeftSide ? -40 : 40;
    const dx = props.x - props.px;
    const dy = props.y - props.py;
    const d = `M ${props.px} ${props.py} c ${DX} 0, ${dx-DX} ${dy}, ${dx} ${dy}`;
    // x1={props.x} y1={props.y} x2={props.px} y2={props.py}
    return (
        <>{level === 0 ? (
            <></>
        ) : (
            <g>
                <path d={d} fill='none' stroke="#ccc" />
            </g>
        )}</>
    );
};

export default Lines;
