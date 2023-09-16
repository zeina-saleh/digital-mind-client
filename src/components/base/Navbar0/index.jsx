import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import logo from '../../../assets/logo.svg'
import Button from '../../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navbar0 = () => {

    const navigation = useNavigate();

    const login = async () => {
            navigation('/login')
    }
    return (
        <>
            <div className='flex justify-between items-center h-24 w-full mx-auto px-4 mb-5'>
                <img src={logo} alt="logo" className="w-20 h-12" />
                <div className='hidden md:flex space-x-4 text-3xl'>
                    {/* <Link to='/home' className='nav-link p-4 cursor-pointer '>Explore</Link>
                    <Link to='/home/planner' className='nav-link p-4 cursor-pointer'>Planner</Link>
                    <Link to='/home/collections' className='nav-link p-4 cursor-pointer'>Collections</Link> */}
                </div>
                <div className='flex items-center'>
                    <Button text={"Login"} onClick={login} classname={'nav-link text-xl w-24 h-10'} />
                </div>
            </div>
        </>
    )
}

export default Navbar0