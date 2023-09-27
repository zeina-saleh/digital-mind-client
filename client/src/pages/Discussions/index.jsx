import React from 'react'
import { useState, useEffect } from 'react'
import { sendRequest } from '../../config/request'
import './style.css'
import DiscussionCard from '../../components/base/DiscussionCard'

const Discussions = () => {

  const [discussions, setDiscussions] = useState([])
  const [user, setUser] = useState({id:null, name:null})
  const [exit, setExit] = useState(0)
  const [editMode, setEditMode] = useState(false)

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

        <div className='flex ml-56 w-full gap-5 flex-wrap'>
          {discussions.map(discussion => (
            <DiscussionCard key={discussion.id} discussion={discussion} user={user} setExit={setExit} setEditMode={setEditMode}/>
          ))}
        </div>

        
      </div>
    </div>
  )
}

export default Discussions