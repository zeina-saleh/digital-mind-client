import React from 'react'
import Modal from 'react-modal'
import { useState } from 'react'
import Button from '../../UI/Button'
import Input from '../../UI/Input'
import { sendRequest } from '../../../config/request'


const AddModal = ({ openModal, placeholder = 'type something', ideaFunc, onCancel, setTitle, title, collectionId }) => {

    const createCollection = async () => {
        try {
          const response = await sendRequest({ method: 'POST', route: '/createCollection', body: { title: title }, });
          console.log(response);
          setTitle('');
          onCancel();
        } catch (error) {
          console.log(error);
        }
      }

      const addIdea = async () => {
        try {
          const response = await sendRequest({ method: 'POST', route: `/addIdea/${collectionId}`, body: { title: title }, });
          console.log(response);
          setTitle('')
          onCancel();
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <Modal overlayClassName='overlay' isOpen={openModal} onRequestClose={onCancel} className='mini-modal flex flex-col gap-5 items-center w-96 h-50 bg-white'>
            <div className='flex flex-col gap-7 w-full'>
                <Input label={'Add a title'} className={"input2"} wrapper={"wrapper2"} placeholder={placeholder}
                    onChange={(title) => setTitle(title)} />

                <div className='flex gap-5 w-full'>
                    <Button classname={"w-20 h-8"} text={'Submit'} onClick={ideaFunc ? addIdea : createCollection} />
                    <Button classname={"w-20 h-8"} text={'Cancel'} onClick={onCancel} />
                </div>
            </div>
        </Modal>
    )
}

export default AddModal