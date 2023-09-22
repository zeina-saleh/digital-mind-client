import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import send from '../../../assets/send.svg'
import { firestore } from '../../../config/firebase';
import { addDoc, collection, query, orderBy, limit, onSnapshot } from '@firebase/firestore';
import './style.css'

const ChatBox = ({ handleCloseChatModal, title, userId, members, discussionId }) => {

  const [text, setText] = useState('')
  const [msgs, setMsgs] = useState([])

  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  },[msgs])

  const messagesRef = collection(firestore, `messages${discussionId}`)
  const q = query(messagesRef, orderBy('createdAt'), limit(25));

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedMsgs = snapshot.docs.map((doc) => doc.data());
      setMsgs(updatedMsgs);
    });
    if (q) {
      return () => {
        unsubscribe();
      };
    }
  }, [q]);

  const handleDataChange = (e) => {
    setText(e.target.value);
  };

  const sendMessage = async () => {
    try {
      await addDoc(messagesRef, {
        text,
        createdAt: new Date(),
        uid: userId,
      });
      setText('');
    } catch (error) {
      console.log(error);
    }
  };

  const print = () => {
    console.log(members)
  }

  return (
    <>
      <div className='flex w-full h-14 items-center justify-between px-4 bg-[#1ED690] rounded-t-3xl rounded-b-none'>
        <div className='chat-header text-xl text-[#2b2b2b] hover:text-[#F3F5F8] cursor-pointer' onClick={print}>Members</div>
        <div className='chat-header text-2xl text-[#2b2b2b]'>{title}</div>
        <FontAwesomeIcon icon={faXmark} className="text-[#2b2b2b] w-14 h-6 cursor-pointer hover:text-[#F3F5F8]" onClick={handleCloseChatModal} />
      </div>
      <div className='chat-area flex flex-col flex-1 w-full p-2 bg-white'>
        {msgs.map((msg, index) => (
          <>
            <div key={index} className={`flex w-full ${msg.uid === userId ? 'justify-end' : ''}`}>
              <div className={`flex w-1/2 ${msg.uid === userId ? 'authUser self-end' : 'user2'}`}>
                <div className='flex flex-col'>
                  { msg.uid === userId ? <></> : <p className='font-semibold text-[#33443d]'>{msg.uid}</p>}
                  <p className='text-[#1e1e1e]'>{msg.text}</p>
                </div>
              </div>
            </div>
            <div ref={ref}></div>
          </>
        ))}
      </div >
      <div className='msg-container flex w-full h-fit min-h-20'>
        <textarea name='text' value={text || ""} className='msg-area flex w-full h-20 bg-[#F3F5F8] px-5 pr-12 py-3' placeholder='Message' id="" cols="30" rows="10" onChange={handleDataChange}></textarea>
        <img src={send} className='msg-send h-7 w-8 cursor-pointer' onClick={sendMessage}></img>
      </div>
    </>
  )
}

export default ChatBox