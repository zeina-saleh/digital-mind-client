import React from 'react'
import { useState } from 'react'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
import Select from 'react-select'
import { sendRequest } from '../../../config/request'

const InviteForm = ({ handleCloseInviteModal, ideaId, options }) => {

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
        try {
            const response = await sendRequest({ method: 'POST', route: `/createDiscussion/${ideaId}`, body: formData, });
            console.log(response);
            handleCloseInviteModal()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex flex-col gap-2'>
            <h6 className='self-center font-semibold mb-2'>Create New Discussion</h6>
            <Input label={'Add a title for your discussion'} onChange={(title) => setTitle(title)} />
            <div className='flex flex-col gap-1'>
                <p className='px-2'>Add participants</p>
                <Select isSearchable isMulti placeholder='Search Users' onChange={(members) => setSelectedMemebers(members)}
                    options={options} styles={{
                        option: (base) => ({
                            ...base,
                            border: `none`,
                            height: '100%',
                        }),
                    }} theme={(theme) => ({
                        ...theme,
                        borderRadius: 15,
                        colors: {
                            ...theme.colors,
                            primary25: '#1ae690',
                            primary: '#1ae690',
                        },
                    })} />
            </div>
            <div className='flex justify-center gap-5 w-full mt-2'>
                <Button classname={"w-20 h-8"} text={'Cancel'} onClick={handleCloseInviteModal} />
                <Button classname={"w-20 h-8"} text={'Invite'} onClick={createDiscussion} />
            </div>
        </div>
    )
}

export default InviteForm