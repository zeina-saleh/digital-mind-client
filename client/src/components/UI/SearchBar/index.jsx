import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({setSearchField}) => {

  const onSearchChange = (event) => {
    const searchFieldInput = event.target.value.toLowerCase();
    setSearchField(searchFieldInput)
  }
  return (
    <div className='search-bar flex rounded-l-full rounded-r-full w-6/12 h-12 p-1 px-2.5 gap-3 items-center'>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#1e1e1e",}} className='w-6 h-8' /> 
      <input type='text' className='search-input w-9/12 ' placeholder='search ideas' onChange={onSearchChange}></input>
      <div></div>
    </div>
  )
}

export default SearchBar