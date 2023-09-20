import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import send from '../../../assets/send.svg'
import './style.css'

const ChatBox = () => {
  return (
    <>
      <div className='flex w-full h-14 items-center justify-between px-4 bg-[#1ED690] rounded-t-3xl rounded-b-none'>
        <div className='chat-header text-xl text-[#2b2b2b] hover:text-[#F3F5F8] cursor-pointer'>Members</div>
        <div className='chat-header text-2xl text-[#2b2b2b]'>Idea Title</div>
        <FontAwesomeIcon icon={faXmark} className="text-[#2b2b2b] w-14 h-6 cursor-pointer hover:text-[#F3F5F8]" />
      </div>
      <div className='chat-area flex flex-col flex-1 w-full'>
        
      </div>
      <div className='msg-container flex w-full h-fit min-h-20'>
        <textarea className='msg-area flex w-full h-20 bg-[#F3F5F8] px-5 pr-12 py-3' placeholder='Message' id="" cols="30" rows="10"></textarea>
        <img src={send} className='msg-send h-7 w-8 '></img>
      </div>
    </>
  )
}

export default ChatBox