import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sendRequest } from '../../config/request'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import Button2 from '../../components/UI/Button2';
import './style.css'

const Map = () => {

    const { ideaId } = useParams();
    const [idea, setIdea] = useState([]);

    const fetchIdea = async () => {
        try {
            const response = await sendRequest({ route: `/getIdeas/${ideaId}`, body: "" });
            setIdea(response.idea);
            console.log(idea)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchIdea();
    }, []);

    const print = () => {
        console.log('print')
    }

    return (
        <>
            <div className='flex flex-col items-center w-full gap-4'>
                <div className='line w-11/12'></div>
                <div className='flex gap-1 w-11/12 justify-end'>
                    <Button2 text={"Group Discussion"} onClick={print} icon={faComments} />
                    <Button2 text={"Add Resource"} onClick={print} icon={faPlus} />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full min-h-screen'>
                <div className='idea-title text-3xl font-medium'>{idea.title}</div>
            </div>
        </>
    )
}

export default Map