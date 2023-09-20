import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import logo from '../../../assets/logo.svg'
import Button from '../../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { sendRequest } from '../../../config/request';
import './style.css'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const navigation = useNavigate();


    const handleNav = () => {
        setNav(!nav);
    }

    const logout = async () => {
        try {
            // const response = await sendRequest({ route: "/logout", body: "" });
            localStorage.clear()
            navigation('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='flex justify-between items-center h-24 max-w-5xl mx-auto px-4 mb-10'>
                <Link to='/'><img src={logo} alt="logo" className="w-20 h-12" /></Link>
                <div className='hidden md:flex space-x-4 text-3xl'>
                    <Link to='/home' className='nav-link p-4 cursor-pointer '>Explore</Link>
                    <Link to='/home/planner' className='nav-link p-4 cursor-pointer'>Planner</Link>
                    <Link to='/home/collections' className='nav-link p-4 cursor-pointer'>Collections</Link>
                </div>
                {!nav ? <>
                    <div className='flex items-center'>
                        <Button text={"Logout"} onClick={logout} classname={'nav-link text-xl w-24 h-10'} />
                    </div>
                </>
                    : <>
                        <FontAwesomeIcon icon={faBars} style={{ color: "#1e1e1e", }} className="w-14 h-6 cursor-pointer" />
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