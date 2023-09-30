import React from 'react'
import Modal from 'react-modal'
import Button from '../../UI/Button'
import { sendRequest } from '../../../config/request'

const DeleteModal = ({ openModal, ideaFunc, onCancel, setTitle, collectionId, ideaId, editMode, setEditMode }) => {

    const deleteIdea = async () => {
        try {
            const response = await sendRequest({ route: `/deleteIdea/${ideaId}`, body: "", });
            console.log(response);
            setTitle(response.idea.id)
            onCancel();
        } catch (error) {
            console.log(error);
        }
    }

    const deleteCollection = async () => {
        try {
            const response = await sendRequest({ route: `/deleteCollection/${collectionId}`, body: "", });
            console.log(response);
            setTitle(response.collection.id)
            onCancel();
            if (editMode) setEditMode(!editMode)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Modal overlayClassName='overlay' isOpen={openModal} onRequestClose={onCancel} className='mini-modal flex flex-col gap-5 items-center w-96 h-50 bg-white'>
            <div className='flex flex-col items-center p-8 gap-3 w-full'>
                <div className=''>Are you sure you want to delete?</div>
                <div className='flex justify-center gap-5 w-full'>
                    <Button classname={"w-20 h-8"} text={'No'} onClick={onCancel} />
                    <Button classname={"w-20 h-8"} text={'Yes'} onClick={ideaFunc ? deleteIdea : deleteCollection} />
                </div>
            </div>
        </Modal>
    )
}

export default DeleteModal