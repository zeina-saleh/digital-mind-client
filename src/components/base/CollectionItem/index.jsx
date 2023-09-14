import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faSquarePlus, faSquareMinus, faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import './style.css'
import logo from '../../../assets/logo.svg'

const CollectionItem = ({ collection, setIdeaFunc, handleOpenModal, setCollectionId, 
    handleOpenConsentModal, setIdeaId, editMode }) => {

    const [showIdeas, setShowIdeas] = useState(false)
    const [chevron, setChevron] = useState(faChevronDown)

    const onToggle = () => {
        setShowIdeas(!showIdeas);
        chevron == faChevronDown ? setChevron(faChevronUp) : setChevron(faChevronDown);
    }

    const handleAddIdea = () => {
        setIdeaFunc(true);
        setCollectionId(collection.id);
        handleOpenModal()
    }

    const handleDeleteIdea = (ideaId) => {
        setIdeaFunc(true);
        setIdeaId(ideaId);
        handleOpenConsentModal()
    }

    return (
        <div className='flex flex-col'>
            <div className='collection-item flex items-center justify-between p-2'>
                <div className='flex items-center gap-5'>
                    <p className='text-xl'>{collection.title}</p>
                    <div className='flex gap-3'>
                        <FontAwesomeIcon icon={faPen} style={{ color: "#1e1e1e", }} className={`${editMode ? "" : 'hidden'} cursor-pointer`} onClick={onToggle} />
                        <FontAwesomeIcon icon={faTrashCan} style={{ color: "#1e1e1e", }} className={`${editMode ? "" : 'hidden'} cursor-pointer`} onClick={onToggle} />
                    </div>
                </div>
                <FontAwesomeIcon icon={chevron} style={{ color: "#1e1e1e", }} className='cursor-pointer' onClick={onToggle} />
            </div>
            {(collection.ideas.length !== 0 && showIdeas) ? (
                <div className='flex flex-wrap px-10 py-4 gap-5 mt-4'>
                    {collection.ideas.map(idea => (
                        <div key={idea.id} className='flex flex-col'>
                            <div className='idea-item flex flex-col items-center w-64 h-60 px-2 pt-2'>
                                <FontAwesomeIcon icon={faSquareMinus} style={{ color: "#1ED690", }} onClick={() => handleDeleteIdea(idea.id)} className='self-end cursor-pointer h-7 w-7' />
                                <img src={logo} alt="" className='w-40 h-40' />
                            </div>
                            <Link to={`/home/collections/idea`}><div className='w-fit p-2 font-normal hover:text-[#1ED690]'>{idea.title}</div></Link>
                        </div>
                    ))}
                    <FontAwesomeIcon icon={faSquarePlus} style={{ color: "#1ED690", }} className='add-idea h-7 w-7 cursor-pointer' onClick={handleAddIdea} />
                </div>
            ) : (
                collection.ideas.length === 0 && showIdeas && (
                    <div className='flex px-2 mt-4 items-center cursor-pointer gap-2'>
                        <FontAwesomeIcon icon={faSquarePlus} style={{ color: "#1ED690", }} className='h-7 w-7' onClick={handleAddIdea} />
                        <div>Add ideas</div>
                    </div>
                )
            )}
        </div>
    )
}

export default CollectionItem