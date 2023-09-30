import React from 'react'
import constellation from '../../assets/constellation.svg'
import './style.css'
import Navbar0 from '../../components/base/Navbar0'
import logo from '../../assets/brain.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faComments } from '@fortawesome/free-regular-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import explore from '../../assets/explore.png'
import collections from '../../assets/collections.png'
import map from '../../assets/map.png'
import chatbox from '../../assets/chatbox.png'
import planner from '../../assets/planner.png'
import location from '../../assets/location.png'
import firebase1 from '../../assets/firebase1.png'
import Button from '../../components/UI/Button'


const Landing = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
      <div className='idea-title self-center text-8xl items-center text-center w-full h-full'>
        <Navbar0 />
        <section id='hero' className='flex flex-col w-full h-full justify-center' style={{ backgroundImage: `url(${constellation})` }}>
          <div className='idea-title text-8xl font-medium'>Digital Mind</div>
        </section>


        <section id='about' className='flex flex-col w-full h-full justify-center items-center text-base'>

          <div className='flex items-center justify-between h-3/4 gap-10'>
            <div className='flex flex-col w-1/2 h-3/4 items-center justify-between self-end'>
              <div className='flex flex-col items-center text-xl'>
                <h4>It all starts with an idea</h4>
                <div className='w-3/4'>We are a group of people who love to learn new things and we want you to be part of it too
                  <br></br> Bring your ideas to life
                  Brainstorm, visualize and plan your next step with a mind map</div>
              </div>
              <div className='flex gap-2 mt-10'>
                <div className='flex flex-col card-1 items-center justify-center'>
                  <FontAwesomeIcon icon={faClipboard} className='text-[#1e1e1e] w-10 h-10' />
                  <p>Plan</p>
                </div>
                <div className='flex flex-col card-1 items-center justify-center'>
                  <FontAwesomeIcon icon={faComments} className='text-[#1e1e1e] w-10 h-10' />
                  <p>Connect</p>
                </div>
                <div className='flex flex-col card-1 items-center justify-center'>
                  <FontAwesomeIcon icon={faPeopleGroup} className='text-[#1e1e1e] w-10 h-10' />
                  <p>Meetup</p>
                </div>
              </div>
            </div>
            <img src={logo}></img>
          </div>
        </section>


        <section id='demo' className='flex w-full h-full justify-center items-center text-base'>
          <div className='flex items-center w-10/12 justify-between h-3/4 gap-10 self-start'>
            <div className='w-1/2 h-1/2'>
              <Carousel autoPlay={true} infiniteLoop={true} className='carousel'>
                <div>
                  <img src={explore} />
                </div>
                <div>
                  <img src={collections} />
                </div>
                <div>
                  <img src={map} />
                </div>
                <div>
                  <img src={planner} />
                </div>
                <div>
                  <img src={chatbox} />
                </div>
                <div>
                  <img src={location} />
                </div>
              </Carousel>
            </div>
            <div className='flex flex-col w-1/2 h-1/2 items-center justify-between self-end'>
              <div className='flex flex-col items-center text-xl'>
                <h4>Never miss out on a feature</h4>
                <p>Live chats, location maps and a calendar to keep you on track</p>
                <p>Create beautiful maps with images, pdfs, links and texts</p>
                <p>Connect, view and map your resources all in one place </p>
              </div>
              <div class="loader">
                <div class="loader-logo">
                  <img src={logo} className='h-14 w-14'></img>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id='contact' className='flex flex-col w-full h-full justify-center items-center'>
          <div className='flex flex-col w-10/12 h-3/4 gap-10 justify-center items-center'>
            <div className='flex flex-col w-fit items-center gap-6'>
              <div className='text-6xl'>We'd love to hear from you</div>
              <div className='text-xl'>Whether you’re curious about features or want to join us as an admin —we’re ready to answer any and all questions.</div>
            </div>
            <div className='flex gap-2 items-center text-xl w-1/2 h-10'>
              <input className='contact-input w-3/4 px-3 h-9 rounded-l-full rounded-r-full' placeholder='enter email'></input>
              <Button text={"Submit"} classname={'w-24 h-9 text-white'} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Landing