import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faSquareMinus, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import './style.css'
import logo from '../../../assets/logo.svg'

const CollectionItem = ({ collection, setIdeaFunc, handleOpenModal, setCollectionId,
    handleOpenConsentModal, setIdeaId, editMode, setTitle }) => {

    const navigation = useNavigate();
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

    const handleDeleteIdea = (event, ideaId) => {
        event.stopPropagation()
        setIdeaFunc(true);
        setIdeaId(ideaId);
        handleOpenConsentModal()
    }

    const handleDeleteCollection = (event) => {
        event.stopPropagation()
        setIdeaFunc(false);
        setCollectionId(collection.id);
        handleOpenConsentModal()
    }

    const handleEditCollection = (event, collectionTitle) => {
        event.stopPropagation()
        setIdeaFunc(false);
        setCollectionId(collection.id);
        setTitle(collectionTitle)
        handleOpenModal()
    }

    const handleEditIdea = (ideaId, ideaTitle) => {
        setIdeaFunc(true);
        setCollectionId(collection.id);
        setIdeaId(ideaId);
        setTitle(ideaTitle)
        handleOpenModal()
    }

    const handleNavigation = (ideaId) => {
        navigation(`/home/collections/idea/${ideaId}`)
    }

    return (
        <div className='flex flex-col'>
            <div className='collection-item flex items-center justify-between p-2 cursor-pointer' onClick={onToggle}>
                <div className='flex items-center gap-6'>
                    <p className='text-xl'>{collection.title}</p>
                    <div className='flex gap-5'>
                        <FontAwesomeIcon icon={faPen} className={`${editMode ? "" : 'hidden'} text-[#6b6b6b] cursor-pointer hover:text-[#1ed690]`} onClick={(event) => handleEditCollection(event, collection.title)} />
                        <FontAwesomeIcon icon={faTrashCan} className={`${editMode ? "" : 'hidden'} text-[#6b6b6b]  cursor-pointer hover:text-[#1ed690]`} onClick={(event) => handleDeleteCollection(event)} />
                    </div>
                </div>
                <FontAwesomeIcon icon={chevron} style={{ color: "#1e1e1e", }} className='cursor-pointer' onClick={onToggle} />
            </div>
            {(collection.ideas.length !== 0 && showIdeas) ? (
                <div className='flex flex-wrap ml-4 px-10 py-4 gap-5 mt-4'>
                    {collection.ideas.map(idea => (
                        <div key={idea.id} className='flex flex-col'>
                            <div className='idea-item flex flex-col items-center w-64 h-60 px-2 pt-2 cursor-pointer' onClick={() => handleNavigation(idea.id)}>
                                <FontAwesomeIcon icon={faSquareMinus} style={{ color: "#1ED690", }} onClick={(event) => handleDeleteIdea(event, idea.id)} className='self-end cursor-pointer h-7 w-7' />
                                <img src={logo} alt="" className='w-40 h-40' />
                            </div>
                            <div className='flex gap-3 items-center justify-between px-1 w-64'>
                                <div className='w-fit p-2 font-normal'>{idea.title}</div>
                                <FontAwesomeIcon icon={faPen} className={`${editMode ? "" : 'hidden'} text-[#6b6b6b]  cursor-pointer hover:text-[#1ed690]`} onClick={() => handleEditIdea(idea.id, idea.title)} />
                                {/* <div className='flex items-center gap-1'>
                                    <p className='text-lg'>{idea.likes_count}</p>
                                    <FontAwesomeIcon icon={fasHeart} style={{ color: "#1ED690", }} className='w-5 h-5' />
                                </div> */}
                            </div>

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