import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../../../assets/logo.svg';
import Button from '../../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar0 = () => {
    const navigation = useNavigate();
    const [mobnav, setMobnav] = useState(false);

    const home = async () => {
        navigation('/home');
    }

    const login = async () => {
        navigation('/userlogin');
    }

    const token = localStorage.getItem('access_token');

    return (
        <div className='flex flex-col'>
            <div className='hidden md:flex justify-between items-center h-24 w-full mx-auto px-8 mb-5 fixed bg-[#F3F5F8]'>
                <Link to='hero' spy={true} smooth={true} offset={0} duration={500}><img src={logo} alt="logo" className="w-24 h-14 cursor-pointer" /></Link>
                <div className='flex space-x-4 text-3xl font-medium'>
                    <Link to='about' spy={true} smooth={true} offset={0} duration={500} className='p-4 cursor-pointer hover:text-[#1ae690]'>Overview</Link>
                    <Link to='demo' spy={true} smooth={true} offset={0} duration={500} className='p-4 cursor-pointer hover:text-[#1ae690]'>Demo</Link>
                    <Link to='contact' spy={true} smooth={true} offset={0} duration={500} className='p-4 cursor-pointer hover:text-[#1ae690]'>Contact Us</Link>
                </div>
                <div className='flex items-center'>
                    {token ? <div className='nav-link p-4 text-3xl font-medium cursor-pointer hover:text-[#1ae690]' onClick={home}>Platform</div>
                        : <Button text={"Login"} onClick={login} classname={'nav-link text-xl w-24 h-10'} />}
                </div>
            </div>
            <div className='md:hidden flex justify-between items-center h-24 w-full mx-auto px-8 mb-5 fixed bg-[#F3F5F8]'>
                <Link to='hero' spy={true} smooth={true} offset={0} duration={500}><img src={logo} alt="logo" className="w-24 h-14 cursor-pointer" /></Link>
                <FontAwesomeIcon icon={faBars} className="md:hidden text-[#1e1e1e] hover:text-[#1ae690] w-14 h-6 cursor-pointer" onClick={() => setMobnav(true)} />
            </div>
            {mobnav && (
                <div className='z-10 fixed w-full h-full md:hidden flex flex-col gap-2 px-4 py-4 pb-8 bg-[#1ae691] text-2xl'>
                    <FontAwesomeIcon icon={faXmark} className="md:hidden self-end w-14 h-6 cursor-pointer text-[#1e1e1e] hover:text-[#fff]" onClick={() => setMobnav(false)} />
                    <div className='flex flex-col gap-2 h-1/2 justify-end'>
                        <Link to='about' className='cursor-pointer text-[#1e1e1e] hover:text-[#fff]' onClick={() => setMobnav(false)}>Overview</Link>
                        <Link to='demo' className='cursor-pointer text-[#1e1e1e] hover:text-[#fff]' onClick={() => setMobnav(false)}>Demo</Link>
                        <Link to='contact' className='cursor-pointer text-[#1e1e1e] hover:text-[#fff]' onClick={() => setMobnav(false)}>Contact Us</Link>
                        {token ? <Link to='/home' className='cursor-pointer text-[#1e1e1e] hover:text-[#fff]' onClick={home}>Platform</Link>
                            : <Link to='/userlogin' className='cursor-pointer text-[#1e1e1e] hover:text-[#fff]' onClick={login}>Login</Link>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar0;
