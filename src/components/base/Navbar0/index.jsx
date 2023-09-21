import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import logo from '../../../assets/logo.svg'
import Button from '../../UI/Button';

const Navbar0 = () => {

    const navigation = useNavigate();

    const landing = async () => {
        navigation('/')
    }

    const login = async () => {
        navigation('/login')
    }

    return (
        <>
            <div className='flex justify-between items-center h-24 w-full mx-auto px-8 mb-5 fixed'>
                <Link to='/' spy={true} smooth={true} offset={0} duration={500}><img src={logo} alt="logo" className="w-24 h-14 cursor-pointer" onClick={landing}/></Link>
                <div className='hidden md:flex space-x-4 text-3xl font-medium'>
                    <Link to='about' spy={true} smooth={true} offset={0} duration={500} className='nav-link p-4 cursor-pointer '>About Us</Link>
                    <Link to='demo' spy={true} smooth={true} offset={0} duration={500} className='nav-link p-4 cursor-pointer'>Demo</Link>
                    <Link to='contact' spy={true} smooth={true} offset={0} duration={500} className='nav-link p-4 cursor-pointer'>Contact Us</Link>
                </div>
                <div className='flex items-center'>
                    {/* { <div className='nav-link p-4 text-3xl font-medium cursor-pointer' onClick={home}>Home</div> */}
                    <Button text={"Login"} onClick={login} classname={'nav-link text-xl w-24 h-10'} />
                </div>
            </div>
        </>
    )
}

export default Navbar0