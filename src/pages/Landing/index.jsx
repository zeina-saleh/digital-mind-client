import React from 'react'
import constellation from '../../assets/constellation.svg'
import './style.css'
import Navbar0 from '../../components/base/Navbar0'

const Landing = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
      <div className='idea-title self-center text-8xl text-center w-full h-full'>
        <Navbar0 />
          <section id='hero' className='flex flex-col w-full h-full justify-center' style={{ backgroundImage: `url(${constellation})` }}>
            <div className='idea-title text-8xl font-medium'>Digital Mind</div>
          </section>
        <section id='about' className='flex flex-col w-full h-full justify-center'>
          <div className='flex flex-col gap-2 font-normal text-lg'>
            <h4>It all starts with an idea</h4>
            <p>We are a group of people who love to learn new things and we want you to be part of it too.</p><br/>
          </div>
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