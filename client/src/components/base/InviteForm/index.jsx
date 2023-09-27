import React from 'react'
import { useState } from 'react'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
import Select from 'react-select'
import { sendRequest } from '../../../config/request'

const InviteForm = ({  handleCloseInviteModal, ideaId, options  }) => {

    const [selectedMemebers, setSelectedMemebers] = useState([])
    const [title, setTitle] = useState('')

    const print = () => {
        console.log(selectedMemebers)
    }

    const createDiscussion = async () => {
        const formData = {
            title: title,
            members: selectedMemebers.map(member => member.value),
        };
        try{
            const response = await sendRequest({ method: 'POST', route: `/createDiscussion/${ideaId}`, body: formData, });
                console.log(response);
                handleCloseInviteModal()
        } catch(error){
            console.log(error)
        }
      }

    return (
        <>
            <h6 className='self-center font-semibold'>Create New Discussion</h6>
            <Input label={'Add a title for your discussion'} onChange={(title) => setTitle(title)} />
            <h6>Add participants</h6>
            <Select isSearchable isMulti placeholder='Search Users' onChange={(members) => setSelectedMemebers(members)} options={options} />
            <div className='flex justify-center gap-5 w-full'>
                <Button classname={"w-20 h-8"} text={'Invite'} onClick={createDiscussion} />
                <Button classname={"w-20 h-8"} text={'Cancel'} onClick={handleCloseInviteModal} />
            </div>
        </>
    )
}

export default InviteForm