import React from 'react'
import Modal from 'react-modal'
import Button from '../../UI/Button'
import Input from '../../UI/Input'
import { sendRequest } from '../../../config/request'


const AddModal = ({ openModal, placeholder = 'title', ideaFunc, onCancel, setTitle, title, collectionId, ideaId, editMode, setEditMode }) => {

  const handleCancel = () => {
    onCancel()
    if(editMode) setEditMode(!editMode)
  }

  const createCollection = async () => {
    try {
      onCancel();
      const response = await sendRequest({ method: 'POST', route: `/createCollection${editMode ? `/${collectionId}` : ""}`, body: { title: title }, });
      console.log(response);
      setTitle('');
      if (editMode) setEditMode(!editMode)
    } catch (error) {
      console.log(error);
    }
  }

  const addIdea = async () => {
    try {
      onCancel();
      const response = await sendRequest({ method: 'POST', route: `/addIdea/${collectionId}${editMode ? `/${ideaId}` : ""}`, body: { title: title }, });
      console.log(response);
      setTitle('')
      if (editMode) setEditMode(!editMode)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal overlayClassName='overlay' isOpen={openModal} onRequestClose={onCancel} className='mini-modal flex flex-col gap-5 items-center w-96 h-50 bg-white'>
      <div className='flex flex-col gap-3 w-full p-8'>
        <Input label={editMode ? 'Edit title' : 'Enter title'} value={editMode ? title : ''} placeholder={placeholder}
          onChange={(title) => setTitle(title)} />

        <div className='flex justify-center w-full gap-5'>
          <Button classname={"w-20 h-8"} text={'Cancel'} onClick={handleCancel} />
          <Button classname={"w-20 h-8"} text={'Submit'} onClick={ideaFunc ? addIdea : createCollection} />
        </div>
      </div>
    </Modal>
  )
}

export default AddModal