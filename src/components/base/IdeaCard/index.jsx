import React, { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { sendRequest } from '../../../config/request';

const IdeaCard = ({ idea, setIdeasCount }) => {

    async function likeIdea() {
        try {
            const response = await sendRequest({ method: "POST", route: `/likeIdea/${idea.id}`, body: '' });
            setIdeasCount(idea.likes_count)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className='flex flex-col'>
                <div className='card flex items-center justify-center w-64 h-60'></div>
                <div className='flex flex-col w-full p-2'>
                    <p className='font-semibold'>{idea.collection.user.name}</p>
                    <div className='flex justify-between items-center w-full'>
                        <p>{idea.title}</p>
                        <div className='flex items-center gap-2'>
                            <p>{idea.likes_count}</p>
                            <FontAwesomeIcon icon={idea.liked? fasHeart : faHeart} style={{ color: "#20e399", }} className='w-5 h-5 cursor-pointer' onClick={likeIdea} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IdeaCard