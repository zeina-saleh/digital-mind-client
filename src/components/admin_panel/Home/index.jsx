import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwatchbook, faComments, faFolderTree } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Home = () => {
    return (
        <main className='main-container ml-5'>
            <div className='main-title mb-5'>
                <h3 className='text-[#383838] font-semibold text-2xl'>Dashboard</h3>
            </div>
            <div className='main-cards'>
                <div className='card-inner flex items-center gap-4'>
                   <div className='b-circle flex items-center justify-center bg-[#1ed690] h-14 w-14 rounded-full'>
                     <FontAwesomeIcon icon={faUser} className='w-7 h-7 text-[#F3F5F8] cursor-pointer' /></div>
                    <div className='flex flex-col'>
                        <p className='text-[#b1b1b1]'>Users</p>
                        <p className='text-[#383838] font-bold'>number</p>
                    </div>
                </div>
                <div className='card-inner flex items-center gap-4'>
                   <div className='b-circle flex items-center justify-center bg-[#1ed690] h-14 w-14 rounded-full'>
                     <FontAwesomeIcon icon={faSwatchbook} className='w-7 h-7 text-[#F3F5F8] cursor-pointer' /></div>
                    <div className='flex flex-col'>
                        <p className='text-[#b1b1b1]'>Collections</p>
                        <p className='text-[#383838] font-bold'>number</p>
                    </div>
                </div>
                <div className='card-inner flex items-center gap-4'>
                   <div className='b-circle flex items-center justify-center bg-[#1ed690] h-14 w-14 rounded-full'>
                     <FontAwesomeIcon icon={faComments} className='w-7 h-7 text-[#F3F5F8] cursor-pointer' /></div>
                    <div className='flex flex-col'>
                        <p className='text-[#b1b1b1]'>Discussions</p>
                        <p className='text-[#383838] font-bold'>number</p>
                    </div>
                </div>
                <div className='card-inner flex items-center gap-4'>
                   <div className='b-circle flex items-center justify-center bg-[#1ed690] h-14 w-14 rounded-full'>
                     <FontAwesomeIcon icon={faFolderTree} className='w-7 h-7 text-[#F3F5F8] cursor-pointer' /></div>
                    <div className='flex flex-col'>
                        <p className='text-[#b1b1b1]'>Files</p>
                        <p className='text-[#383838] font-bold'>number</p>
                    </div>
                </div>

            </div>

            <div className='charts'>

            </div>
        </main>
    )
}

export default Home