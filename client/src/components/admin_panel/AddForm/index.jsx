import React from 'react'
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import { nodeRequest } from '../../../config/nodeRequest';

const AddForm = ({ handleCloseModal, setKey, setUser, user, editMode, setEditMode }) => {

    const handleAddUser = async () => {
        try {
            const response = await nodeRequest({ method: 'POST', route: "http://127.0.0.1:8000/users", body: user });
            console.log(response)
            setKey(response.id)
            handleCloseModal()

        } catch (error) {
            console.log(error);
        }
    }

    const handleEditUser = async () => {
        try {
            const response = await nodeRequest({ method: 'PUT', route: `http://127.0.0.1:8000/users/${user.id}`, body: user });
            console.log(response)
            setKey(response.id)
            setEditMode(false)
            handleCloseModal()

        } catch (error) {
            console.log(error);
        }
    }

    const handleEditMode = () => {
        setEditMode(false)
        handleCloseModal()
    }
    return (
        <>
            <h6 className='self-center font-semibold'>Enter User Credentials</h6>
            <Input label={'Name'} value={editMode ? user.name : ''} onChange={(name) => setUser({ ...user, name: name })} />
            <Input label={'Email'} value={editMode ? user.email : ''} onChange={(email) => setUser({ ...user, email: email })} />
            <Input label={'Password'} type={'password'} onChange={(password) => setUser({ ...user, password: password })} />
            <div className='flex justify-center gap-5 w-full'>
                <Button classname={"w-20 h-8"} text={'Submit'} onClick={editMode ? handleEditUser : handleAddUser} />
                <Button classname={"w-20 h-8"} text={'Cancel'} onClick={editMode ? handleEditMode : handleCloseModal} />
            </div>
        </>
    )
}

export default AddForm