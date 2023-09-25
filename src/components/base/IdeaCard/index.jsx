import React, { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart, faXmark, faShareNodes, faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import { sendRequest } from '../../../config/request';
import Modal from 'react-modal';

const IdeaCard = ({ idea, setLikesCount }) => {

    const [like, setLike] = useState({liked: idea.liked, count: idea.likes_count})
    const [openResModal, setOpenResModal] = useState(false)
    const handleOpenResModal = () => setOpenResModal(true)
    const handleCloseResModal = () => setOpenResModal(false)
    

    async function likeIdea() {
        try {
            const response = await sendRequest({ method: "POST", route: `/likeIdea/${idea.id}`, body: '' });
            // setLike({count: response.idea.likes_count})
            console.log(response)
            // console.log(likesCount)
        } catch (error) {
            console.log(error);
        }
    }

    const handleLike = () => {
        likeIdea()
        setLike({...like, liked:!like})
    }

    return (
        <>
            <div className='flex flex-col' >
                <div className='card flex items-center justify-center w-64 h-52 p-2' style={idea.path !== 'storage/images/logo.svg' ? { backgroundColor: '#fff' } : {}}>
                    <img className='card-img cursor-pointer' src={`http://localhost:8000/${idea.path}`} style={idea.path !== 'storage/images/logo.svg' ? { width: '100%', height: '100%', objectFit: 'cover' } : {}} onClick={handleOpenResModal}></img>
                </div>
                <div className='flex flex-col p-2 w-64'>
                    <p className='font-semibold text-lg'>{idea.collection.user.name}</p>
                    {/* <div className='flex justify-between items-center w-full'> */}
                        <p className='text-base'>{idea.title}</p>
                        {/* <div className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={idea.liked ? fasHeart : faHeart} style={{ color: "#1ED690", }} className='w-5 h-5 hover:scale-125 cursor-pointer' onClick={likeIdea} />
                        </div> */}
                    {/* </div> */}
                </div>
            </div>

            <Modal overlayClassName='overlay' isOpen={openResModal} onRequestClose={handleCloseResModal} className='modal flex flex-col py-10 px-20 bg-white max-h-full w-3/5 items-center gap-4'>
                <div className='flex justify-end w-full'>
                    <FontAwesomeIcon icon={faXmark} className='text-[#1e1e1e] w-5 h-5 hover:text-[#1ae690] cursor-pointer' onClick={handleCloseResModal} />
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <p className='text-2xl'>{idea.title}</p>
                    <p className='text-base'>{idea.collection.user.name}</p>
                </div>
                <div className='flex w-11/12 flex-1 justify-between h-2/3'>
                    <img src={`http://localhost:8000/${idea.path}`} alt="img" className={ idea.path=='storage/images/logo.svg'? 'h-72 w-72' : `img-res w-full`} />
                    <div className='flex flex-col h-1/2 justify-around items-center gap-5'>
                        {/* <div className='flex flex-col gap-1 items-center'>
                            <FontAwesomeIcon icon={like.liked ? fasHeart : faHeart} style={{ color: "#1ED690", }} className='w-5 h-5 hover:scale-125 cursor-pointer' onClick={handleLike} />
                            <p className='text-lg'>{like.count}</p>
                        </div> */}
                        <FontAwesomeIcon icon={faShareNodes} style={{ color: "#1ED690", }} className='w-6 h-6 hover:scale-125 cursor-pointer' />
                    </div>
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