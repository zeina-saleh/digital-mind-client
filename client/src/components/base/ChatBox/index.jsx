import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import send from '../../../assets/send.svg'
import { firestore } from '../../../config/firebase';
import { addDoc, collection, query, orderBy, limit, onSnapshot } from '@firebase/firestore';
import { sendRequest } from '../../../config/request'
import './style.css'

const ChatBox = ({ handleCloseChatModal, title, user, discussionId, ideaId, tokens }) => {
  console.log(tokens)

  const [textt, setText] = useState('')
  const [msgs, setMsgs] = useState([])

  const ref = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs])

  const messagesRef = collection(firestore, `messages${discussionId}`)
  const q = query(messagesRef, orderBy('createdAt'), limit(25));

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedMsgs = snapshot.docs.map((doc) => doc.data());
      setMsgs(updatedMsgs);
      console.log(msgs)
    });
    if (q) {
      return () => {
        unsubscribe();
      };
    }
  }, []);

  const handleDataChange = (e) => {
    setText(e.target.value);
  };

  const sendMessage = async () => {
    let text = textt;
    setText('')
    try {
      const docRef = await addDoc(messagesRef, {
        text,
        createdAt: new Date(),
        uid: user.name,
      });

      if (docRef) {
        const response = await sendRequest({
          method: 'POST', route: "/sendNotification",
          body: {
            title: 'Digital Mind',
            message: `${user.name}: ${text}`,
            fcmToken: tokens
          }
        })
        setText('');
        console.log(response)
      } else {
        console.log('Failed to add message to Firestore');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelNavigate = () => {
    navigate(`/home/collections/idea/${ideaId}`)
  }

  return (
    <>
      <div className='flex w-full h-14 items-center justify-between px-4 bg-[#1ED690] rounded-t-3xl rounded-b-none'>
        <div className='chat-header text-xl text-white hover:text-[#3d524a] cursor-pointer' onClick={handelNavigate}>Map</div>
        <div className='chat-header text-2xl text-white'>{title}</div>
        <FontAwesomeIcon icon={faXmark} className="text-white w-14 h-6 cursor-pointer hover:text-[#F3F5F8]" onClick={handleCloseChatModal} />
      </div>
      <div className='chat-area flex flex-col flex-1 w-full p-2 bg-white'>
        {msgs.map((msg, index) => (
          <>
            <div key={index} className={`flex w-full ${msg.uid === user.name ? 'justify-end' : ''}`}>
              <div className={`flex w-1/2 ${msg.uid === user.name ? 'authUser self-end' : 'user2'}`}>
                <div className='flex flex-col'>
                  {msg.uid === user.name ? <></> : <p className='font-semibold text-[#3d524a]'>{msg.uid}</p>}
                  <p className='text-[#1e1e1e]'>{msg.text}</p>
                </div>
              </div>
            </div>
            <div ref={ref}></div>
          </>
        ))}
      </div >
      <div className='msg-container flex w-full h-fit min-h-20'>
        <textarea name='text' value={textt || ""} className='msg-area w-full h-12 bg-[#F3F5F8] px-5 pr-20 py-2'
          placeholder='Message' onChange={handleDataChange} onKeyDown={(e) => {
            if (e.key === "Enter") { e.preventDefault(); sendMessage(); }
          }}></textarea>
        <img src={send} className='msg-send h-7 w-8 cursor-pointer' onClick={sendMessage}></img>
      </div>
    </>
  )
}

export default ChatBox