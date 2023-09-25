import React from 'react'
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className='header'>
        <div className='menu-icon'>
        {/* <FontAwesomeIcon icon={faMagnifyingGlass} className='icon text-[#1e1e1e] cursor-pointer' /> */}
        </div>
        <div className='header-left'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon text-[#1e1e1e] cursor-pointer' />
        </div>
        <div className='header-right'>
        
        </div>
    </header>
  )
}

export default Header