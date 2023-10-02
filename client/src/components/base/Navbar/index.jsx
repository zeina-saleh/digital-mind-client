import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import logo from '../../../assets/logo.svg'
import Button from '../../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './style.css'


const Navbar = () => {
    const [mobnav, setMobnav] = useState(false);
    const navigation = useNavigate();

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
            <div className='hidden md:flex justify-between items-center h-24 max-w-5xl mx-auto px-4 mb-10'>
                <Link to='/'><img src={logo} alt="logo" className="w-20 h-12" /></Link>
                <div className='flex space-x-4 text-2xl'>
                    <Link to='/home' ><div tabindex="-1" className='nav-link px-4 pt-2 cursor-pointer hover:text-[#1ae690]'>Explore</div></Link>
                    <Link to='/home/planner' ><div tabindex="-1" className='nav-link px-4 pt-2 cursor-pointer hover:text-[#1ae690]'>Planner</div></Link>
                    <Link to='/home/collections' ><div tabindex="-1" className='nav-link px-4 pt-2 cursor-pointer hover:text-[#1ae690]'>Collections</div></Link>
                    <Link to='/home/discussions' ><div tabindex="-1" className='nav-link px-4 pt-2 cursor-pointer hover:text-[#1ae690]'>Discussions</div></Link>
                </div >
                <div className='flex items-center'>
                    <Button text={"Logout"} onClick={logout} classname={'nav-link text-xl w-24 h-10'} />
                </div>
                <FontAwesomeIcon icon={faBars} style={{ color: "#1e1e1e", }} className="hidden w-14 h-6 cursor-pointer" />
            </div >
            <div className='md:hidden flex justify-between items-center h-24 w-full mx-auto px-8 mb-5 fixed bg-[#F3F5F8]'>
                <Link to='/home' spy={true} smooth={true} offset={0} duration={500}><img src={logo} alt="logo" className="w-24 h-14 cursor-pointer" /></Link>
                <FontAwesomeIcon icon={faBars} className="md:hidden text-[#1e1e1e] hover:text-[#1ae690] w-14 h-6 cursor-pointer" onClick={() => setMobnav(true)} />
            </div>
            {mobnav && (
                <div className='z-10 fixed w-full h-full md:hidden flex flex-col gap-2 px-4 py-4 pb-8 bg-[#1ae691] text-2xl'>
                    <FontAwesomeIcon icon={faXmark} className="md:hidden self-end w-14 h-6 cursor-pointer text-[#1e1e1e] hover:text-[#fff]" onClick={() => setMobnav(false)} />
                    <div className='flex flex-col gap-2 h-1/2 justify-end'>
                        <Link to='/home' className='cursor-pointer text-[#1e1e1e] hover:text-[#fff]' onClick={() => setMobnav(false)}>Explore</Link>
                        <Link to='/home/planner' className='cursor-pointer text-[#1e1e1e] hover:text-[#fff]' onClick={() => setMobnav(false)}>Planner</Link>
                        <Link to='/home/collections' className='cursor-pointer text-[#1e1e1e] hover:text-[#fff]' onClick={() => setMobnav(false)}>Collections</Link>
                        <Link to='/home/discussions' className='cursor-pointer text-[#1e1e1e] hover:text-[#fff]' onClick={() => setMobnav(false)}>Discussions</Link>
                        <Link to='/userlogin' className='cursor-pointer text-[#1e1e1e] hover:text-[#fff]' onClick={logout}>Logout</Link>
                    </div>
                </div>
            )}

            <Outlet />
        </>
    )
}

export default Navbar