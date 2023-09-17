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
import Lines from '../../components/base/Lines';
import './style.css'

const Map = () => {

    const width = 400;
    const height = 200;
    const R = 90;
    const x0 = width / 2;
    const y0 = height / 2;

    const { ideaId } = useParams();
    const [openModal, setOpenModal] = useState(false)
    const [idea, setIdea] = useState({})
    const [elements, setElements] = useState([])
    const [isUploaded, setIsUploaded] = useState(false)

    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)

    const fetchIdea = async () => {
        try {
            const response = await sendRequest({ route: `/getIdeas/${ideaId}`, body: "" });
            setIdea(response)
            setElements([{ id: response.id, level: 0, caption: response.title, x: x0, y: y0 },
            ...response.text_res, ...response.file_res])
            console.log(elements)

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchIdea();
    }, [isUploaded]);

    const print = () => {
        console.log(elements)
    }

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
                <svg viewBox='0 0 400 200'>
                    {elements.map((element, index) => (
                        <Lines key={index} 
                        x={x0 + R * Math.cos((index * Math.PI * 2 / elements.length) * Math.PI * 2 / (elements.length))} 
                        y={y0 + R * Math.sin((index * Math.PI * 2 / elements.length) * Math.PI * 2 / (elements.length))}
                        px={x0} py={y0} level={index === 0 ? 0 : 1}/>
                    ))}
                    {elements.map((element, index) => (
                        <TreeNode key={index}
                            phi={index * Math.PI * 2 / elements.length}
                            x={index === 0 ? x0 : x0 + R * Math.cos((index * Math.PI * 2 / elements.length) * Math.PI * 2 / (elements.length))}
                            y={index === 0 ? y0 : y0 + R * Math.sin((index * Math.PI * 2 / elements.length) * Math.PI * 2 / (elements.length))}
                            px={x0} py={y0} level={index === 0 ? 0 : 1} 
                            isLeftSide = {(index * Math.PI * 2 / elements.length > Math.PI / 2) && (index * Math.PI * 2 / elements.length < 3 * Math.PI / 2)}
                            caption={element.caption !== null ? element.caption : element.text} type={element.type_id} />
                    ))}
                </svg>

            </div>
            <Modal overlayClassName='overlay' isOpen={openModal} onRequestClose={handleCloseModal} className={'modal w-1/3 h-fit flex flex-col gap-5 py-8 px-9 active:border-0 bg-white'}>
                <ModalForm handleCloseModal={handleCloseModal} ideaId={ideaId} setIsUploaded={setIsUploaded} isUploaded={isUploaded} />
            </Modal>
        </>
    )
}

export default Map