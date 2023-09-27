import React, { useState, useEffect } from 'react'
import { nodeRequest } from '../../../config/nodeRequest';
import './style.css'
import Button2 from '../../UI/Button2';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import ConfirmDelete from '../ConfirmDelete';
import Modal from 'react-modal'

const ChatRooms = () => {

    const [discussions, setDiscussions] = useState([])
    const [discussionId, setDiscussionId] = useState(null)
    const [change, setChange] = useState(undefined)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)

    const handleOpenDeleteModal = () => setOpenDeleteModal(true)
    const handleCloseDeleteModal = () => setOpenDeleteModal(false)


    const fetchDiscussions = async () => {
        try {
            const response = await nodeRequest({ route: "http://127.0.0.1:8000/discussions", body: "" });
            setDiscussions(response)
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    };

    function handleDelete(id) {
        setDiscussionId(id)
        handleOpenDeleteModal()
    }

    useEffect(() => {
        fetchDiscussions();
    }, [change]);

    return (
        <div className="main-container">
            <table className="Table w-full">
                <thead className='t-head'>
                    <tr className='TableRow'>
                        <th className="TableHeader">ID</th>
                        <th className="TableHeader">Title</th>
                        <th className="TableHeader">Created At</th>
                        <th className="TableHeader action">Actions</th>
                    </tr>
                </thead>
                <tbody className='t-body'>
                    {discussions.map((discussion) => (
                        <tr key={discussion.id} className="TableRow">
                            <td className="TableCell">{discussion.id}</td>
                            <td className="TableCell">{discussion.title}</td>
                            <td className="TableCell">{discussion.created_at}</td>
                            <td className="TableCell ActionsCell">
                                <div className='flex w-fit gap-2 m-0'>
                                    <Button2 text={"Remove"} icon={faTrash} onClick={() => handleDelete(discussion.id)}>Delete</Button2>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal overlayClassName='overlay' isOpen={openDeleteModal} onRequestClose={handleCloseDeleteModal} className='mini-modal flex flex-col gap-5 items-center w-96 h-50 bg-white'>
                <ConfirmDelete handleCloseDeleteModal={handleCloseDeleteModal} discussionId={discussionId} setChange={setChange} change={change} />
            </Modal>
        </div>
    )
}

export default ChatRooms