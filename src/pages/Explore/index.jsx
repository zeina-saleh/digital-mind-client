import React from 'react'
import './style.css'
import SearchBar from '../../components/UI/SearchBar'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../config/request'
import { Link } from 'react-router-dom'
import IdeaCard from '../../components/UI/IdeaCard'

const Explore = () => {

  const [ideas, setIdeas] = useState([]);

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
  }, []);

  return (
    <div className='flex flex-col items-center gap-5'>
      <SearchBar />
      <h6>Explore ideas and find people with similar interests</h6>
      <div className='flex pl-5 w-10/12 h-screen gap-5 flex-wrap'>
        {ideas.map(idea => (
          <Link key={idea.id} to={`/home/planner`}>
            <IdeaCard idea={idea} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Explore