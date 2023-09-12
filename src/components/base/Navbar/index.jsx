import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react';
import logo from '../../../assets/logo.svg'
import chat from '../../../assets/chat.svg'
import Button from '../../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark ,faBars} from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }

    const logout = () => {
        console.log("logout")
    }

    return (
        <>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
                <img src={logo} alt="logo" className="w-20 h-12" />
                <ul className='hidden md:flex space-x-4'>
                    <li className='nav-link p-4 cursor-pointer'>Explore</li>
                    <li className='nav-link p-4 cursor-pointer'>Planner</li>
                    <li className='nav-link p-4 cursor-pointer'>My Collections</li>
                </ul>
                {!nav ? <>
                    <div className='flex items-center'>
                        <img src={chat} alt="chat" className="w-16 h-8 cursor-pointer" />
                        <Button text={"Logout"} onClick={logout} classname={'nav-link'}/>
                    </div>
                </>
                    : <>
                        <FontAwesomeIcon icon={faBars} style={{color: "#1e1e1e",}} className="w-16 h-8 cursor-pointer"/> 
                        {/* <ul className='hidden md:flex space-x-4'>
                            <li className='p-4 cursor-pointer'>Explore</li>
                            <li className='p-4 cursor-pointer'>Planner</li>
                            <li className='p-4 cursor-pointer'>My Topics</li>
                        </ul> */}
                    </>}
            </div>

            <Outlet />
        </>
    )
}

export default Navbar