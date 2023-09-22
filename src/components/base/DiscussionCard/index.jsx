import React from 'react'
import Modal from 'react-modal'
import { useState } from 'react'
import ChatBox from '../ChatBox'
import { sendRequest } from '../../../config/request'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const DiscussionCard = ({ discussion, userId, setExit }) => {

    const [openChatModal, setOpenChatModal] = useState(false)

    const handleOpenChatModal = () => setOpenChatModal(true)
    const handleCloseChatModal = () => setOpenChatModal(false)

    const exitDiscussion = async () => {
        try {
            const response = await sendRequest({ route: `/exitDiscussion/${discussion.id}`, body: "" });
            console.log(response)
            setExit(response.id)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex flex-col w-2/5 h-52'>
            <div className='card flex items-center justify-center w-full h-full p-0 cursor-pointer' onClick={handleOpenChatModal}>
                <img className='card-img' src={`http://localhost:8000/storage/images/logo.svg`} ></img>
            </div>
            <div className='flex flex-col w-full p-2'>
                {/* <p className='font-semibold text-lg'>{idea.collection.user.name}</p> */}
                <div className='flex justify-between items-center w-full px-3'>
                    <p className='font-semibold' >{discussion.title}</p>
                    <FontAwesomeIcon className='self-end' icon={faArrowRightFromBracket} style={{ color: "#1ae690", }} onClick={exitDiscussion} />
                    
                </div>
            </div>

            <Modal overlayClassName='overlay' isOpen={openChatModal} onRequestClose={handleCloseChatModal} className='modal flex flex-col w-8/12 h-5/6 rounded-t-3xl rounded-b-none bg-none'>
                <ChatBox handleCloseChatModal={handleCloseChatModal} title={discussion.title} userId={userId} members={discussion.users} discussionId={discussion.id} />
            </Modal>
        </div>
    )
}

export default DiscussionCard