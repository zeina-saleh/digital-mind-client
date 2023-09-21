import React, { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { sendRequest } from '../../../config/request';

const IdeaCard = ({ idea, setLiked, liked, setLikesCount }) => {

    async function likeIdea() {
        try {
            const response = await sendRequest({ method: "POST", route: `/likeIdea/${idea.id}`, body: '' });
            setLiked(response.liked)
            setLikesCount(response.likes_count)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className='flex flex-col'>
            <div className='card flex items-center justify-center w-64 h-52 p-2' style={idea.path !== 'storage/screenshots/logo.svg' ? {backgroundColor: '#fff'} : {} }>
                    <img className='card-img' src={`http://localhost:8000/${idea.path}`}  style={idea.path !== 'storage/screenshots/logo.svg' ? { width: '100%', height: '100%', objectFit: 'cover' } : {}}></img>
                </div>
                <div className='flex flex-col w-full p-2'>
                    <p className='font-semibold text-lg'>{idea.collection.user.name}</p>
                    <div className='flex justify-between items-center w-full'>
                        <p>{idea.title}</p>
                        <div className='flex items-center gap-2'>
                            <p>{idea.likes_count}</p>
                            <FontAwesomeIcon icon={idea.liked ? fasHeart : faHeart} style={{ color: "#1ED690", }} className='w-5 h-5 cursor-pointer' onClick={likeIdea} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IdeaCard