import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import logo from '../../../assets/logo.svg'
import Button from '../../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './style.css'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const navigation = useNavigate();


    const handleNav = () => {
        setNav(!nav);
    }

    const logout = async () => {
        try {
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
                <div className='flex space-x-4 text-2xl'>
                    <Link to='/home' ><div tabindex="-1" className='nav-link px-4 pt-2 cursor-pointer hover:text-[#1ae690]'>Explore</div></Link>
                    <Link to='/home/planner' ><div tabindex="-1" className='nav-link px-4 pt-2 cursor-pointer hover:text-[#1ae690]'>Planner</div></Link>
                    <Link to='/home/collections' ><div tabindex="-1" className='nav-link px-4 pt-2 cursor-pointer hover:text-[#1ae690]'>Collections</div></Link>
                    <Link to='/home/discussions' ><div tabindex="-1" className='nav-link px-4 pt-2 cursor-pointer hover:text-[#1ae690]'>Discussions</div></Link>
                </div >
                {!nav ? <>
                    <div className='flex items-center'>
                        <Button text={"Logout"} onClick={logout} classname={'nav-link text-xl w-24 h-10'} />
                    </div>
                </>
                    : <>
                        <FontAwesomeIcon icon={faBars} style={{ color: "#1e1e1e", }} className="w-14 h-6 cursor-pointer" />
                    </>}
            </div >

            <Outlet />
        </>
    )
}

export default Navbar