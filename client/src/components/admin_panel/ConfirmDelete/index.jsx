import React from 'react'
import Button from '../../UI/Button'
import { nodeRequest } from '../../../config/nodeRequest'
import './style.css'

const ConfirmDelete = ({ handleCloseDeleteModal, userId, discussionId, setChange, change }) => {

    const deleteUser = async () => {
        try {
            const response = await nodeRequest({ route: `http://127.0.0.1:8000/users/${userId}`, method: "DELETE", body: "" });
            setChange(!change)
            handleCloseDeleteModal()
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    };

    const deleteDiscussion = async () => {
        try {
            const response = await nodeRequest({ route: `http://127.0.0.1:8000/Discussions/${discussionId}`, method: "DELETE", body: "" });
            setChange(!change)
            handleCloseDeleteModal()
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='flex flex-col items-center p-8 gap-7 w-full'>
            <div className=''>Are you sure you want to remove user?</div>
            <div className='flex justify-center gap-5 w-full'>
                <Button classname={"w-20 h-8"} text={'Yes'} onClick={userId? deleteUser : deleteDiscussion} />
                <Button classname={"w-20 h-8"} text={'No'} onClick={handleCloseDeleteModal} />
            </div>
        </div>
    )
}

export default ConfirmDelete