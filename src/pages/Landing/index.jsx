import React from 'react'
import constellation from '../../assets/constellation.svg'
import './style.css'
import Navbar0 from '../../components/base/Navbar0'

const Landing = ({isLogged}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
      <div className='idea-title self-center text-8xl text-center w-full h-full'>
        <div className='flex flex-col w-full h-full' style={{ backgroundImage: `url(${constellation})` }}>
          <Navbar0 isLogged={isLogged}/>
          <section id='hero' className='flex flex-col w-full h-full justify-center' >
            <div className='idea-title text-8xl font-medium'>Digital Mind</div>
          </section>
        </div>
        <section id='about' className='flex flex-col w-full h-full justify-center'>
          <div className='idea-title text-7xl font-medium'>About Us</div>
        </section>
        <section id='demo' className='flex flex-col w-full h-full justify-center'>
          <div className='idea-title text-7xl font-medium'>Demo</div>
        </section>
        <section id='contact' className='flex flex-col w-full h-full justify-center'>
          <div className='idea-title text-7xl font-medium'>Contact Us</div>
        </section>
      </div>
    </div>
  )
}

export default Landing