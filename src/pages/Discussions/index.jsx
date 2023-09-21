import React from 'react'
import { useState } from 'react'
import Button from '../../components/UI/Button'
import Modal from 'react-modal'
import ChatBox from '../../components/base/ChatBox'
import './style.css'

const Discussions = () => {

    const [openChatModal, setOpenChatModal] = useState(false)

    const handleOpenChatModal = () => setOpenChatModal(true)
    const handleCloseChatModal = () => setOpenChatModal(false)

  return (
      <div className='flex flex-col items-center w-10/12 min-h-screen gap-12'>
        <div className='flex items-center justify-between w-10/12'>
          <div className='text-3xl page-title'>My Discussions</div>
          </div>

        <Modal overlayClassName='overlay' isOpen={openChatModal} onRequestClose={handleCloseChatModal} className='modal flex flex-col w-8/12 h-5/6 rounded-t-3xl rounded-b-none bg-none'>
            <ChatBox handleCloseModal={handleCloseChatModal}/>
        </Modal>
          </div>
  )
}

export default Discussions