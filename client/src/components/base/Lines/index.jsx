import React from 'react';

const Lines = (props) => {
    const level = props.level;
    const DX = props.isLeftSide ? -40 : 40;
    const dx = props.x - props.px;
    const dy = props.y - props.py;
    const d = `M ${props.px} ${props.py} c ${DX} 0, ${dx-DX} ${dy}, ${dx} ${dy}`;
    let x=props.x 
    if(props.isLeftSide) x=x-15

    const print = () => {
        console.log('clicked')
    }
    return (
        <>{level === 0 ? (
            <></>
        ) : (
            <g>
                <path d={d} fill='none' stroke="#ccc" />
                {props.level !== 0 && props.element.type_id === 2 ?
                    <svg onClick={print} className='res-icon' x={x} y={props.y+2} width="13" height="13" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="link">
                            <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke="#1e1e1e" stroke-width="2" stroke-linecap="round" />
                        </g>
                    </svg>
                    : props.level !== 0 && props.element.type_id === 1 ?
                        <svg width="15" height="15" x={x} y={props.y+2} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 4C4 3.44772 4.44772 3 5 3H14H14.5858C14.851 3 15.1054 3.10536 15.2929 3.29289L19.7071 7.70711C19.8946 7.89464 20 8.149 20 8.41421V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4Z" stroke="#1e1e1e" stroke-width="1" stroke-linecap="round"></path> <path d="M20 8H15V3" stroke="#1e1e1e" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.5 13H11V17H11.5C12.6046 17 13.5 16.1046 13.5 15C13.5 13.8954 12.6046 13 11.5 13Z" stroke="#1e1e1e" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.5 17V13L17.5 13" stroke="#1e1e1e" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 15H17" stroke="#1e1e1e" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 17L7 15.5M7 15.5L7 13L7.75 13C8.44036 13 9 13.5596 9 14.25V14.25C9 14.9404 8.44036 15.5 7.75 15.5H7Z" stroke="#1e1e1e" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        : props.level !== 0 && props.element.type_id === 3 ?
                            <svg onClick={print} className='res-icon' x={x} y={props.y+2} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                <g id="SVGRepo_iconCarrier"> <path d="M4.02693 18.329C4.18385 19.277 5.0075 20 6 20H18C19.1046 20 20 19.1046 20 18V14.1901M4.02693 18.329C4.00922 18.222 4 18.1121 4 18V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V14.1901M4.02693 18.329L7.84762 14.5083C8.52765 13.9133 9.52219 13.8482 10.274 14.3494L10.7832 14.6888C11.5078 15.1719 12.4619 15.1305 13.142 14.5865L15.7901 12.4679C16.4651 11.9279 17.4053 11.8856 18.1228 12.3484C18.2023 12.3997 18.2731 12.4632 18.34 12.5302L20 14.1901M11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z" stroke="#1e1e1e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> </g>
                            </svg>
                            : <></>}
            </g>
        )}</>
    );
};

export default Lines;
