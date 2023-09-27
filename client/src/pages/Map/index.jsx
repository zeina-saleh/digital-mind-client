import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { sendRequest } from '../../config/request'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faComments, faCalendar } from '@fortawesome/free-regular-svg-icons';
import Button2 from '../../components/UI/Button2';
import Modal from 'react-modal';
import ResourceForm from '../../components/base/ResourceForm';
import TreeNode from '../../components/base/TreeNode';
import Lines from '../../components/base/Lines';
import MeetingForm from '../../components/base/MeetingForm';
import InviteForm from '../../components/base/InviteForm';
import html2canvas from 'html2canvas'

import './style.css'

const Map = () => {

    const width = 400;
    const height = 200;
    const R = 90;
    const x0 = width / 2;
    const y0 = height / 2;

    const mapRef = useRef(null);
    const { ideaId } = useParams();
    const [openModal, setOpenModal] = useState(false)
    const [openMeetModal, setOpenMeetModal] = useState(false)
    const [openInviteModal, setOpenInviteModal] = useState(false)
    const [options, setOptions] = useState([
        { value: '', label: '' }
    ])

    const [idea, setIdea] = useState({})
    const [elements, setElements] = useState([])
    const [isUploaded, setIsUploaded] = useState(false)

    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)
    const handleOpenMeetModal = () => setOpenMeetModal(true)
    const handleCloseMeetModal = () => setOpenMeetModal(false)
    const handleOpenInviteModal = () => setOpenInviteModal(true)
    const handleCloseInviteModal = () => setOpenInviteModal(false)

    const takeScreenshot = async () => {
        try {
            const canvas = await html2canvas(mapRef.current);
            const screenshotBlob = await new Promise((resolve) => {
                canvas.toBlob((blob) => {
                    resolve(blob);
                }, "image/jpeg", 0.9);
            });

            const formData = new FormData();
            formData.append('file', screenshotBlob, 'screenshot.jpg');

            const response = await sendRequest({
                method: 'POST', route: `/updateScreenshot/${ideaId}`, body: screenshotBlob,
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

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

    const fetchUsers = async () => {
        try {
            const response = await sendRequest({ route: `/getUsers`, body: "" });
            const options = response.map(user => ({
                label: user.name,
                value: user.id
            }));
            setOptions(options);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchIdea();
        fetchUsers();
    }, [isUploaded]);


    useEffect(()=> {
        takeScreenshot()
    }, [elements])

    return (
        <>
            <div className='flex flex-col items-center w-full gap-4'>
                <div className='line w-11/12'></div>
                <div className='flex gap-1 w-11/12 justify-end'>
                    <Button2 text={"Schedule Meeting"} onClick={handleOpenMeetModal} icon={faCalendar} />
                    <Button2 text={"Group Discussion"} onClick={handleOpenInviteModal} icon={faComments} />
                    <Button2 text={"Add Resource"} onClick={handleOpenModal} icon={faPlus} />
                </div>
            </div>
            <div ref={mapRef} className='flex flex-col justify-center items-center w-full min-h-screen'>
                <svg viewBox='0 0 400 200'>
                    {elements.map((element, index) => (
                        <Lines key={index}
                            x={x0 + R * Math.cos((index * Math.PI * 2 / elements.length) * Math.PI * 2 / (elements.length))}
                            y={y0 + R * Math.sin((index * Math.PI * 2 / elements.length) * Math.PI * 2 / (elements.length))}
                            px={x0} py={y0} level={index === 0 ? 0 : 1}
                            isLeftSide={(index * Math.PI * 2 / elements.length > Math.PI / 2) && (index * Math.PI * 2 / elements.length < 3 * Math.PI / 2)}
                            element={element} />
                    ))}
                    {elements.map((element, index) => (
                        <TreeNode key={index}
                            phi={index * Math.PI * 2 / elements.length}
                            x={index === 0 ? x0 : x0 + R * Math.cos((index * Math.PI * 2 / elements.length) * Math.PI * 2 / (elements.length))}
                            y={index === 0 ? y0 : y0 + R * Math.sin((index * Math.PI * 2 / elements.length) * Math.PI * 2 / (elements.length))}
                            px={x0} py={y0} level={index === 0 ? 0 : 1}
                            isLeftSide={(index * Math.PI * 2 / elements.length > Math.PI / 2) && (index * Math.PI * 2 / elements.length < 3 * Math.PI / 2)}
                            caption={element.caption !== null ? element.caption : element.text} type={element.type_id} element={element}
                        />
                    ))}
                </svg>

            </div>
            <Modal overlayClassName='overlay' isOpen={openModal} onRequestClose={handleCloseModal} className={'modal w-1/3 h-fit flex flex-col gap-5 py-8 px-9 active:border-0 bg-white'}>
                <ResourceForm handleCloseModal={handleCloseModal} ideaId={ideaId} setIsUploaded={setIsUploaded} isUploaded={isUploaded} mapRef={mapRef} />
            </Modal>

            <Modal overlayClassName='overlay' isOpen={openMeetModal} onRequestClose={handleCloseMeetModal} className={'modal w-1/3 h-fit flex flex-col gap-5 py-8 px-9 active:border-0 bg-white'}>
                <MeetingForm handleCloseMeetModal={handleCloseMeetModal} ideaId={ideaId} />
            </Modal>

            <Modal overlayClassName='overlay' isOpen={openInviteModal} onRequestClose={handleCloseInviteModal} className={'modal w-1/3 h-fit flex flex-col gap-5 py-8 px-9 active:border-0 bg-white'}>
                <InviteForm handleCloseInviteModal={handleCloseInviteModal} ideaId={ideaId} options={options}/>
            </Modal>
        </>
    )
}

export default Map