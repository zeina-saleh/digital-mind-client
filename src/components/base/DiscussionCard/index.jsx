import React from 'react'
import Modal from 'react-modal'
import { useState } from 'react'
import ChatBox from '../ChatBox'

const DiscussionCard = ({ discussion }) => {

    const [openChatModal, setOpenChatModal] = useState(false)

    const handleOpenChatModal = () => setOpenChatModal(true)
    const handleCloseChatModal = () => setOpenChatModal(false)

    const print = () => {
        console.log("clicked")
    }

    return (
        <div className='flex flex-col w-2/5 h-52'>
            <div className='card flex items-center justify-center w-full h-full p-0 cursor-pointer' style={discussion.idea.path !== 'storage/images/logo.svg' ? { backgroundColor: '#fff' } : {}} onClick={handleOpenChatModal}>
                <img className='card-img' src={`http://localhost:8000/${discussion.idea.path}`} style={discussion.idea.path !== 'storage/images/logo.svg' ? { width: '100%', height: '100%', objectFit: 'cover' } : {}} ></img>
            </div>
            <div className='flex flex-col w-full p-2'>
                {/* <p className='font-semibold text-lg'>{idea.collection.user.name}</p> */}
                <div className='flex justify-between items-center w-full'>
                    <p className='font-semibold' >{discussion.title}</p>
                    <div className='flex items-center gap-2'>
                        {/* <p>{idea.likes_count}</p> */}
                        {/* <FontAwesomeIcon icon={idea.liked ? fasHeart : faHeart} style={{ color: "#1ED690", }} className='w-5 h-5 cursor-pointer' onClick={likeIdea} /> */}
                    </div>
                </div>
            </div>

            <Modal overlayClassName='overlay' isOpen={openChatModal} onRequestClose={handleCloseChatModal} className='modal flex flex-col w-8/12 h-5/6 rounded-t-3xl rounded-b-none bg-none'>
                <ChatBox handleCloseChatModal={handleCloseChatModal} title={discussion.title} memebers={discussion.users}/>
            </Modal>
        </div>
    )
}

export default DiscussionCard