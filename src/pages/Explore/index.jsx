import React from 'react'
import './style.css'
import SearchBar from '../../components/UI/SearchBar'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../config/request'
import IdeaCard from '../../components/UI/IdeaCard'

const Explore = () => {

  const [ideas, setIdeas] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [ideasCount, setIdeasCount] = useState(0);

  const fetchIdeas = async () => {
    try {
      const response = await sendRequest({ route: "/getIdeas", body: "" });
      setIdeas(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, [ideasCount]);

  return (
    <div className='flex flex-col items-center gap-5'>
      <SearchBar />
      <h6>Explore ideas and find people with similar interests</h6>
      <div className='flex pl-5 w-10/12 h-screen gap-5 flex-wrap'>
        {ideas.map(idea => (
            <IdeaCard key={idea.id} idea={idea} setIsLiked={setIsLiked} setIdeasCount={setIdeasCount}/>
        ))}
      </div>
    </div>
  )
}

export default Explore