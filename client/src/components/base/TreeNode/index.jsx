import React from 'react'
import { useRef, useState } from 'react';
import Modal from 'react-modal';
import './style.css'
import logo from '../../../assets/logo.svg'

const TreeNode = (props) => {

    // const svgRef = useRef();

    const[path, setpath] = useState('')
    const [openResModal, setOpenResModal] = useState(false)
    const handleOpenResModal = () => setOpenResModal(true)
    const handleCloseResModal = () => setOpenResModal(false)

    const width = 100;
    const height = 20;

    const isLeftSide = (props.phi > Math.PI / 2) && (props.phi < 3 * Math.PI / 2)
    let x = props.x;
    let textAlign = "t-right"
    let textOffset = 3

    if (isLeftSide) {
        x -= width
        textAlign = "t-left"
        textOffset = -3
    }
    if (props.level === 0) {
        textAlign = "t-middle"
        textOffset = 0

    }

    const root = <circle className='containerr' cx={props.x} cy={props.y} r="30" fill="none" stroke="#1e1e1e"></circle>
    const element = props.level === 0 ? root : <></>

    let classname =''
    props.type ===1 | props.type ===2 | props.type ===3 ? classname='cursor-pointer hover:fill-[#1ed690]': classname=''

    // function click (){
    //     svgRef.current.onClick(()=> props.handleOpenModal)
    // }

    function displayResource(){
        if(props.element.type_id===3){
            setpath(props.element.path)
            handleOpenResModal()
        }
        if(props.element.type_id===1){
            setpath(props.element.path)
            handleOpenResModal()
        }
        if(props.element.type_id===2){
            openInNewTab(props.element.text)
        }
    }

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };

    return (
        <>
            <g>
                {element}
                <text onClick={displayResource} className={`text ${textAlign} ${classname}`} x={props.x + textOffset} y={props.y}>{props.caption}</text>
            </g>
            <Modal overlayClassName='overlay' isOpen={openResModal} onRequestClose={handleCloseResModal} className={`modal flex items-center bg-none h-fit ${props.type===3? 'w-fit' : 'w-11/12'}`}>
             {props.type === 3? <img src={`http://localhost:8000/${path}`} alt="img" className="img-res max-h-96" />
             : props.type === 1? <embed src={`http://localhost:8000/${path}`} type="application/pdf" width="100%" height="600px" /> : <></>}
            </Modal>
        </>
    )
}

export default TreeNode