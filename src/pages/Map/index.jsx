import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sendRequest } from '../../config/request'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import Button2 from '../../components/UI/Button2';
import Modal from 'react-modal';
import ModalForm from '../../components/base/ModalForm';
import TreeNode from '../../components/base/TreeNode';
import './style.css'

const Map = () => {

    const { ideaId } = useParams();
    const [openModal, setOpenModal] = useState(false)
    const [idea, setIdea ] = useState({})
    const [elements, setElements] = useState([])
    const [isUploaded, setIsUploaded] = useState(false)

    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)

    const fetchIdea = async () => {
        try {
            const response = await sendRequest({ route: `/getIdeas/${ideaId}`, body: "" });
            setIdea(response)
            setElements([...response.text_res, ...response.file_res])
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchIdea();
    }, [isUploaded]);

    const print = () => {
        console.log('print')
    }

    const width = 400;
    const height = 200;
    const R = 90;
    const x0 = width / 2;
    const y0 = height / 2;

    return (
        <>
            <div className='flex flex-col items-center w-full gap-4'>
                <div className='line w-11/12'></div>
                <div className='flex gap-1 w-11/12 justify-end'>
                    <Button2 text={"Group Discussion"} onClick={print} icon={faComments} />
                    <Button2 text={"Add Resource"} onClick={handleOpenModal} icon={faPlus} />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full min-h-screen'>
                {/* <div className='idea-title text-2xl font-medium'>{idea.title}</div> */}
                <svg viewBox='0 0 600 400'>
                <TreeNode
                    x={x0} y={y0} caption={idea.title} level={0} />
                {elements.map((element, index) => (
                    <TreeNode key={index}
                        x={x0 + R * Math.cos(index * Math.PI * 2 / (elements.length + 1))}
                        y={y0 + R * Math.sin(index * Math.PI * 2 / (elements.length + 1))}
                        caption={element.caption!==null? element.caption : element.text} level={1} />
                ))}
            </svg>
                
            </div>
            <Modal overlayClassName='overlay' isOpen={openModal} onRequestClose={handleCloseModal} className={'modal w-1/3 h-fit flex flex-col gap-5 py-8 px-9 active:border-0 bg-white'}>
                <ModalForm handleCloseModal={handleCloseModal} ideaId={ideaId} setIsUploaded={setIsUploaded}/>
            </Modal>
        </>
    )
}

export default Map