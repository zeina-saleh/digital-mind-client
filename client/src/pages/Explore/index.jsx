import React from 'react'
import './style.css'
import SearchBar from '../../components/UI/SearchBar'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../config/request'
import IdeaCard from '../../components/base/IdeaCard'
import { useDebounce } from 'usehooks-ts'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import brain from '../../assets/brain.svg'

const Explore = () => {

  const [ideas, setIdeas] = useState([]);
  const [searchField, setSearchField] = useState('')
  const debouncedValue = useDebounce(searchField, 500)
  const [searchResult, setSearchResult] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [page_num, setPage_num] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  })

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = async () => {
    try {
      const response = await axios({
        method: 'GET', url: "/getIdeas", params: { page: page_num }, body: "",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json',
        },
      });
      const ideass = response.data.data
      setIdeas([...ideas, ...ideass]);
      const page = response.data.current_page
      setPage_num(page_num => page_num + 1)
      if (page === response.data.data.last_page) setHasMore(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function search() {
      try {
        const response = await sendRequest({ method: 'POST', route: `/search`, body: { param: debouncedValue } });
        setSearchResult(response)
      } catch (error) {
        console.log(error);
      }
    }
    search()
  }, [debouncedValue])

  let filterCriteria = [];
  if (searchResult.empty) {
    filterCriteria = ideas
  }
  else if (searchResult.no_result) {
    filterCriteria = []
  }
  else if (searchResult.idea) {
    searchResult.idea.data.forEach(element => {
      filterCriteria.push(element)
    });
  }
  else if (searchResult.user_ideas) {
    searchResult.user_ideas.data.forEach(element => {
      filterCriteria.push(element)
    })
  }

  const filteredIdeas = ideas.filter((obj1) =>
    filterCriteria.some((obj2) => obj2.id === obj1.id)
  );

  return loading ? (
    <section className='load-anim flex w-full justify-center'>
      <img className='pulse-logo h-52 w-56 mt-16' src={brain}></img>
    </section>
  ) : (
    <div className='flex flex-col items-center gap-5'>
      <SearchBar setSearchField={setSearchField} />
      <h6>Explore ideas and find people with similar interests</h6>
      <div className='flex pl-5 w-10/12 h-screen gap-5 flex-wrap'>
        <InfiniteScroll dataLength={filteredIdeas.length} next={fetchIdeas} hasMore={hasMore} className='flex flex-wrap gap-5'>
          {filteredIdeas.length > 0 ? (
            filteredIdeas.map((idea) => (
              <IdeaCard key={idea.id} idea={idea} />
            ))
          ) : (
            ideas.map((idea) => (
              <IdeaCard key={idea.id} idea={idea} />
            ))
          )}
        </InfiniteScroll>
      </div>
    </div>
  )
}
export default Explore