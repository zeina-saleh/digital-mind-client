import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faSquareMinus, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import './style.css'
import logo from '../../../assets/logo.svg'

const CollectionItem = ({ collection, setIdeaFunc, handleOpenModal, setCollectionId,
    handleOpenConsentModal, setIdeaId, editMode }) => {

    const [showIdeas, setShowIdeas] = useState(false)
    const [chevron, setChevron] = useState(faChevronDown)

    const onToggle = () => {
        setShowIdeas(!showIdeas);
        chevron === faChevronDown ? setChevron(faChevronUp) : setChevron(faChevronDown);
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

    const handleDeleteCollection = () => {
        setIdeaFunc(false);
        setCollectionId(collection.id);
        handleOpenConsentModal()
    }

    const handleEditCollection = () => {
        setIdeaFunc(false);
        setCollectionId(collection.id);
        handleOpenModal()
    }

    return (
        <div className='flex flex-col'>
            <div className='collection-item flex items-center justify-between p-2'>
                <div className='flex items-center gap-6'>
                    <p className='text-xl'>{collection.title}</p>
                    <div className='flex gap-5'>
                        <FontAwesomeIcon icon={faPen} className={`${editMode ? "" : 'hidden'} text-[#6b6b6b] cursor-pointer hover:text-[#1ed690]`} onClick={handleEditCollection} />
                        <FontAwesomeIcon icon={faTrashCan} className={`${editMode ? "" : 'hidden'} text-[#6b6b6b]  cursor-pointer hover:text-[#1ed690]`} onClick={handleDeleteCollection} />
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
                            <Link to={`/home/collections/idea/${idea.id}`}><div className='w-fit p-2 font-normal hover:text-[#1ED690]'>{idea.title}</div></Link>
                        </div>
                    ))}
                    <div className='idea-item flex justify-center items-center gap-2 w-64 h-60 px-2 pt-2'>
                        <p>add idea </p>
                        <FontAwesomeIcon icon={faPlus} style={{ color: "#1ED690", }} onClick={handleAddIdea} className='cursor-pointer h-7 w-7' />
                    </div>
                </div>
            ) : (
                collection.ideas.length === 0 && showIdeas && (
                    <div className='flex flex-wrap px-10 py-4 gap-5 mt-4'>
                        <div className='idea-item flex justify-center items-center gap-2 w-64 h-60 px-2 pt-2'>
                            <p>add idea </p>
                            <FontAwesomeIcon icon={faPlus} style={{ color: "#1ED690", }} onClick={handleAddIdea} className='cursor-pointer h-7 w-7' />
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default CollectionItem