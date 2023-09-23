import React from 'react'
import './style.css'
import SearchBar from '../../components/UI/SearchBar'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../config/request'
import IdeaCard from '../../components/base/IdeaCard'
import { useDebounce } from 'usehooks-ts'

const Explore = () => {

  const [ideas, setIdeas] = useState([]);
  const [likesCount, setLikesCount] = useState('');
  const [searchField, setSearchField] = useState('')
  const debouncedValue = useDebounce(searchField, 500)
  const [searchResult, setSearchResult] = useState([])

  const fetchIdeas = async () => {
    try {
      const response = await sendRequest({ route: "/getIdeas", body: "" });
      setIdeas(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function search() {
      try {
        const response = await sendRequest({ method: 'POST', route: `/search`, body: { param: debouncedValue } });
        console.log(response);
        setSearchResult(response)
      } catch (error) {
        console.log(error);
      }
    }
    search()
  }, [debouncedValue])

  useEffect(() => {
    fetchIdeas();
  }, [likesCount]);

  let filterCriteria = [];
  if (searchResult.ideas) {
    filterCriteria = ideas
  }
  else if (searchResult.idea) {
    searchResult.idea.forEach(element => {
      filterCriteria.push(element)
    });
  }
  else if (searchResult.user) {
    searchResult.user[0].collections.forEach(collection => {
      filterCriteria.push(...collection.ideas)
    })
  }
  const print = () => {
    // console.log(filteredIdeas)
    console.log(debouncedValue)
  }

  const filteredIdeas = ideas.filter((obj1) =>
    filterCriteria.some((obj2) => obj2.id === obj1.id)
  );

  return (
    <div className='flex flex-col items-center gap-5'>
      <SearchBar setSearchField={setSearchField} />
      <h6>Explore ideas and find people with similar interests</h6>
      <div className='flex pl-5 w-10/12 h-screen gap-5 flex-wrap'>
        {filteredIdeas.length > 0 ? (
          filteredIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} setLikesCount={setLikesCount} />
          ))
        ) : (
          ideas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} setLikesCount={setLikesCount} />
          ))
        )}
      </div>
    </div>
  )
}

export default Explore