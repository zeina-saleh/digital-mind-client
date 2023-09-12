import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react';
import logo from '../../../assets/logo.svg'
import Button from '../../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark ,faBars} from '@fortawesome/free-solid-svg-icons';
import './style.css'


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
                <div className='hidden md:flex space-x-4'>
                    <Link to='/home' className='nav-link p-4 cursor-pointer'>Explore</Link>
                    <Link to='/home/planner' className='nav-link p-4 cursor-pointer'>Planner</Link>
                    <Link to='/home/collections' className='nav-link p-4 cursor-pointer'>My Collections</Link>
                </div>
                {!nav ? <>
                    <div className='flex items-center'>
                        <Button text={"Logout"} onClick={logout} classname={'nav-link w-24 h-10'}/>
                    </div>
                </>
                    : <>
                        <FontAwesomeIcon icon={faBars} style={{color: "#1e1e1e",}} className="w-14 h-6 cursor-pointer"/> 
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