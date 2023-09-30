import React, { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart, faXmark, faShareNodes, faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import { sendRequest } from '../../../config/request';
import Modal from 'react-modal';

const IdeaCard = ({ idea, setLikesCount }) => {

    const [openResModal, setOpenResModal] = useState(false)
    const handleOpenResModal = () => setOpenResModal(true)
    const handleCloseResModal = () => setOpenResModal(false)

    return (
        <>
            <div className='flex flex-col' >
                <div className='card flex items-center justify-center w-64 h-52 p-2' style={idea.path !== 'storage/images/logo.svg' ? { backgroundColor: '#fff' } : {}}>
                    <img className='card-img cursor-pointer' src={`http://localhost:8000/${idea.path}`} style={idea.path !== 'storage/images/logo.svg' ? { width: '100%', height: '100%', objectFit: 'cover' } : {}} onClick={handleOpenResModal}></img>
                </div>
                <div className='flex flex-col px-3 w-64'>
                    <p className='font-semibold text-lg'>{idea.title}</p>
                    <span className='text-base'>by {idea.collection.user.name}</span>
                </div>
            </div>

            <Modal overlayClassName='overlay' isOpen={openResModal} onRequestClose={handleCloseResModal} className='modal flex flex-col py-10 px-20 bg-white h-full w-2/3 items-center gap-4'>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-full gap-2'>
                        <p className='text-2xl'>{idea.title}</p>
                        <p className='text-base'>{idea.collection.user.name}</p>
                    </div>
                    <FontAwesomeIcon icon={faXmark} className='text-[#1e1e1e] w-5 h-5 hover:text-[#1ae690] cursor-pointer' onClick={handleCloseResModal} />
                </div>
                <div className='flex items-center w-5/6 h-full'>
                    <img src={`http://localhost:8000/${idea.path}`} alt="map" className={idea.path == 'storage/images/logo.svg' ? 'h-72 w-72' : `img-res scale-125`} />
                </div>
                <div className='flex gap-3 self-start items-baseline'>
                    <FontAwesomeIcon icon={faSwatchbook} style={{ color: "#1e1e1e", }} className='w-6 h-6' />
                    <div>{idea.collection.title} Collection</div>
                </div>
            </Modal>
        </>
    )
}

export default IdeaCard