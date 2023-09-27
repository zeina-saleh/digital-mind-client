import React from 'react'
import Modal from 'react-modal'
import { useState } from 'react'
import ChatBox from '../ChatBox'
import { sendRequest } from '../../../config/request'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import Button from '../../UI/Button'

const DiscussionCard = ({ discussion, user, setExit, editMode }) => {

    const [openChatModal, setOpenChatModal] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [openConfirmModal, setOpenConfirmModal] = useState(false)

    const handleOpenChatModal = () => setOpenChatModal(true)
    const handleCloseChatModal = () => setOpenChatModal(false)
    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)
    const handleOpenConfirmModal = () => setOpenConfirmModal(true)
    const handleCloseConfirmModal = () => setOpenConfirmModal(false)

    const exitDiscussion = async () => {
        try {
            const response = await sendRequest({ route: `/exitDiscussion/${discussion.id}`, body: "" });
            console.log(response)
            setExit(response.id)
        } catch (error) {
            console.log(error);
        }
    }
    const deleteDiscussion = async () => {
        try {
            const response = await sendRequest({ route: `/exitDiscussion/${discussion.id}/delete`, body: "" });
            console.log(response)
            setExit(response.id)
        } catch (error) {
            console.log(error);
        }
    }

    const handleConfirmDelete = (event) => {
        event.stopPropagation()
        handleOpenConfirmModal()
    }

    return (
        <div className='flex flex-col w-2/5 h-52'>
            <div className='card flex flex-col w-full h-full p-0 cursor-pointer' onClick={handleOpenChatModal}>
                {user.id === discussion.user_id? <FontAwesomeIcon className='self-end h-6 w-6 p-2 cursor-pointer' icon={faMinusSquare} style={{ color: "#1ae690", }} onClick={(e) => handleConfirmDelete(e)} /> : <></>}
                <img className={`card-img self-center ${user.id === discussion.user_id? 'mt-7' : 'mt-16' } `} src={`http://localhost:8000/storage/images/logo.svg`} ></img>
            </div>
            <div className='flex flex-col w-full p-2'>
                <div className='flex justify-between items-center w-full px-3'>
                    <p className='font-semibold' >{discussion.title}</p>
                    { user.id !== discussion.user_id? <FontAwesomeIcon className='self-end h-5 w-5 cursor-pointer' icon={faArrowRightFromBracket} style={{ color: "#1ae690", }} onClick={handleOpenModal} /> : <></>}

                </div>
            </div>

            <Modal overlayClassName='overlay' isOpen={openChatModal} onRequestClose={handleCloseChatModal} className='modal flex flex-col w-8/12 h-5/6 rounded-t-3xl rounded-b-none bg-none'>
                <ChatBox handleCloseChatModal={handleCloseChatModal} title={discussion.title} user={user} discussionId={discussion.id} ideaId={discussion.idea_id}/>
            </Modal>

            <Modal overlayClassName='overlay' isOpen={openModal} onRequestClose={handleCloseModal} className='mini-modal flex flex-col gap-5 items-center w-96 h-50 bg-white'>
                <div className='flex flex-col items-center p-8 gap-7 w-full'>
                    <div className=''>Are you sure you want to exit discussion?</div>
                    <div className='flex justify-center gap-5 w-full'>
                        <Button classname={"w-20 h-8"} text={'Yes'} onClick={exitDiscussion} />
                        <Button classname={"w-20 h-8"} text={'No'} onClick={handleCloseModal} />
                    </div>
                </div>
            </Modal>

            <Modal overlayClassName='overlay' isOpen={openConfirmModal} onRequestClose={handleCloseConfirmModal} className='mini-modal flex flex-col gap-5 items-center w-96 h-50 bg-white'>
                <div className='flex flex-col items-center p-8 gap-7 w-full'>
                    <div className=''>Are you sure you want to close discussion?</div>
                    <div className='flex justify-center gap-5 w-full'>
                        <Button classname={"w-20 h-8"} text={'Yes'} onClick={deleteDiscussion} />
                        <Button classname={"w-20 h-8"} text={'No'} onClick={handleCloseConfirmModal} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default DiscussionCard