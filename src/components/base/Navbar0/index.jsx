import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import logo from '../../../assets/logo.svg'
import Button from '../../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar0 = ({isLogged}) => {

    const navigation = useNavigate();

    const home = async () => {
            navigation('/home')
    }

    const login = async () => {
            navigation('/login')
    }
    
    return (
        <>
            <div className='flex justify-between items-center h-24 w-full mx-auto px-8 mb-5 fixed'>
                <Link to='hero' spy={true} smooth={true} offset={0} duration={500}><img src={logo} alt="logo" className="w-24 h-14 cursor-pointer" /></Link>
                <div className='hidden md:flex space-x-4 text-3xl font-medium'>
                    <Link to='about' spy={true} smooth={true} offset={0} duration={500} className='nav-link p-4 cursor-pointer '>About Us</Link>
                    <Link to='demo' spy={true} smooth={true} offset={0} duration={500} className='nav-link p-4 cursor-pointer'>Demo</Link>
                    <Link to='contact' spy={true} smooth={true} offset={0} duration={500} className='nav-link p-4 cursor-pointer'>Contact Us</Link>
                </div>
                <div className='flex items-center'>
                    { isLogged? <div className='nav-link p-4 text-3xl font-medium cursor-pointer' onClick={home}>Home</div>
                    : <Button text={"Login"} onClick={login} classname={'nav-link text-xl w-24 h-10'} /> }
                </div>
            </div>
        </>
    )
}

export default Navbar0