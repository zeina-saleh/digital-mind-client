import React, { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { sendRequest } from '../../../config/request';
import Modal from 'react-modal';

const IdeaCard = ({ idea, setLikeId, setLikesCount }) => {

    const [openResModal, setOpenResModal] = useState(false)
    const handleOpenResModal = () => setOpenResModal(true)
    const handleCloseResModal = () => setOpenResModal(false)

    async function likeIdea() {
        try {
            const response = await sendRequest({ method: "POST", route: `/likeIdea/${idea.id}`, body: '' });
            setLikeId(response.id)
            setLikesCount(response.likes_count)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className='flex flex-col' >
                <div className='card flex items-center justify-center w-64 h-52 p-2' style={idea.path !== 'storage/images/logo.svg' ? { backgroundColor: '#fff' } : {}}>
                    <img className='card-img cursor-pointer' src={`http://localhost:8000/${idea.path}`} style={idea.path !== 'storage/images/logo.svg' ? { width: '100%', height: '100%', objectFit: 'cover' } : {}} onClick={handleOpenResModal}></img>
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

            <Modal overlayClassName='overlay' isOpen={openResModal} onRequestClose={handleCloseResModal} className='modal bg-none h-fit w-fit'>
                <img src={`http://localhost:8000/${idea.path}`} alt="img" className="img-res" />
            </Modal>
        </>
    )
}

export default IdeaCard