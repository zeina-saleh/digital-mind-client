import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './style.css'
import logo from '../../../assets/logo.svg'

const CollectionItem = ({ collection, setIdeas }) => {

    console.log(collection)
    const [showIdeas, setShowIdeas] = useState(false)
    const [chevron, setChevron] = useState(faChevronDown)

    const onToggle = () => {
        setShowIdeas(!showIdeas);
        chevron == faChevronDown ? setChevron(faChevronUp) : setChevron(faChevronDown);
    }
    return (
        <div className='flex flex-col'>
            <div className='collection-item flex items-center justify-between px-2'>
                <p className='text-xl'>{collection.title}</p>
                <FontAwesomeIcon icon={chevron} style={{ color: "#1e1e1e", }} className='cursor-pointer' onClick={onToggle} />
            </div>
            {showIdeas ? <div className='flex px-2 py-4 gap-5'>
                {collection.ideas.map(idea => (
                    <Link key={idea.id} to={`/home/planner`}>
                    <div className='flex flex-col'>
                        <div className='idea-item flex items-center justify-center w-64 h-60'>
                            <img src={logo} alt="" className='w-40 h-40'/>
                        </div>
                        <div className='flex flex-col w-full p-2'>
                            <p className='font-semibold'>{idea.title}</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
                : <></>}
        </div>
    )
}

export default CollectionItem