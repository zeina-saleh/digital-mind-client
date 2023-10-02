import React from 'react'
import { useState, useEffect } from 'react'
import { sendRequest } from '../../config/request'
import './style.css'
import DiscussionCard from '../../components/base/DiscussionCard'
import { messaging } from '../../config/firebase';
import { getToken } from 'firebase/messaging';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const Discussions = () => {

  const [discussions, setDiscussions] = useState([])
  const [user, setUser] = useState({ id: null, name: null })
  const [exit, setExit] = useState(0)
  const [editMode, setEditMode] = useState(false)
  const [tokens, setTokens] = useState(null)
  const [emptyState, setEmptyState] = useState(false)

  async function requestPermission() {
    const permission = await Notification.requestPermission()
    if (permission === 'granted') {
      const token = await getToken(messaging, { vapidKey: 'BO6L1QNjM1ZshA5CvXqEC7XxfIdzGyBZfV6iTQzpL69f3uiT4oIVIbZgCXr5LruMlB76VR-zZscGcH7m_3PbVPM' })
      console.log(token)
      try {
        const response = await sendRequest({ method: "POST", route: '/saveToken', body: { token: token } });
        setTokens(response.tokens)
      } catch (error) {
        console.log(error);
      }

    } else if (permission === 'denied') {
      console.log('permission denied')
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setEmptyState(true)
    }, 1500)
  })

  useEffect(() => {
    requestPermission()
  }, [])

  const fetchDiscussions = async () => {
    try {
      const response = await sendRequest({ route: "/getUserDiscussions", body: "" });
      setDiscussions(response.discussions);
      setUser(response.user);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDiscussions();
  }, [exit]);

  const unhide = () => {
    setEditMode(!editMode)
  }

  return (
    <div className='flex flex-col items-center w-full max-h-screen gap-5'>
      <div className='flex flex-col items-center w-10/12 max-h-screen gap-12'>
        <div className='flex items-center justify-between w-10/12'>
          <div className='text-3xl page-title'>My Discussions</div>
        </div>
        {discussions.length === 0 && emptyState ? (
          <section className='flex flex-col gap-4 justify-center items-center empty-state w-full'>
            <FontAwesomeIcon icon={faComments} className='h-52 w-52 text-[#1ae690]' />
            <div className='flex flex-col gap-1 items-center'>
              <div className='empty-div'>You have no discussions</div>
            </div>
          </section>
        ) : (
          <div className='flex ml-56 w-full gap-5 flex-wrap'>
            {discussions.map(discussion => (
              <DiscussionCard key={discussion.id} discussion={discussion} user={user} setExit={setExit} setEditMode={setEditMode} tokens={tokens} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Discussions