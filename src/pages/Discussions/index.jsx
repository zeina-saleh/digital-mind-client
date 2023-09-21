import React from 'react'
import { useState, useEffect } from 'react'
import Button from '../../components/UI/Button'
import Modal from 'react-modal'
import ChatBox from '../../components/base/ChatBox'
import { sendRequest } from '../../config/request'
import './style.css'
import DiscussionCard from '../../components/base/DiscussionCard'

const Discussions = () => {

  const [openChatModal, setOpenChatModal] = useState(false)
  const [discussions, setDiscussions] = useState([])

  const handleOpenChatModal = () => setOpenChatModal(true)
  const handleCloseChatModal = () => setOpenChatModal(false)

  const fetchDiscussions = async () => {
    try {
      const response = await sendRequest({ route: "/getUserDiscussions", body: "" });
      setDiscussions(response);
    } catch (error) {
      console.log(error);
    }
    console.log(discussions)
  };

  useEffect(() => {
    fetchDiscussions();
  }, []);

  return (
    <div className='flex flex-col items-center w-full gap-5'>

      <div className='flex flex-col items-center w-10/12 max-h-screen gap-12'>
        <div className='flex items-center justify-between w-10/12'>
          <div className='text-3xl page-title'>My Discussions</div>
          {/* <div className='flex gap-1'>
          <Button2 text={"Saved Ideas"} onClick={unhide} icon={faBookmark} />
          <Button2 text={"Create Collection"} onClick={handleAddCollection} icon={faPlus} />
          <Button2 text={"Edit"} onClick={unhide} icon={faPen} />
        </div> */}
        </div>

        <div className='flex ml-56 w-full h-screen gap-5 flex-wrap'>
          {discussions.map(discussion => (
            <DiscussionCard key={discussion.id} discussion={discussion} />
          ))}
        </div>

        <Modal overlayClassName='overlay' isOpen={openChatModal} onRequestClose={handleCloseChatModal} className='modal flex flex-col w-8/12 h-5/6 rounded-t-3xl rounded-b-none bg-none'>
          <ChatBox handleCloseChatModal={handleCloseChatModal} />
        </Modal>
      </div>
    </div>
  )
}

export default Discussions