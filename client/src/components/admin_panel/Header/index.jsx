import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Button from '../../UI/Button';

const Header = () => {

  const navigation = useNavigate()

  const logout = async () => {
    try {
        localStorage.clear()
        navigation('/')
    } catch (error) {
        console.log(error);
    }
}
  return (
    <header className='header'>
      <div className='menu-icon'>
        {/* <FontAwesomeIcon icon={faMagnifyingGlass} className='icon text-[#1e1e1e] cursor-pointer' /> */}
      </div>
      <div className='header-left'>
        {/* <FontAwesomeIcon icon={faMagnifyingGlass} className='icon text-[#1e1e1e] cursor-pointer' /> */}
      </div>
      <div className='header-right'>
        <Button  text={"LOGOUT"} onClick={logout} classname={'w-28 h-10 text-white'}/>
      </div>
    </header>
  )
}

export default Header