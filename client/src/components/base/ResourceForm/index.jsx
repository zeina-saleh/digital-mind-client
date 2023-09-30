import React from 'react'
import Select from 'react-select'
import { useState } from 'react'
import Input from '../../UI/Input'
import Input2 from '../../UI/Input2'
import Button from '../../UI/Button'
import { sendRequest } from '../../../config/request'

const ResourceForm = ({ handleCloseModal, ideaId, setIsUploaded, isUploaded, mapRef }) => {

    const [type, setType] = useState({ value: 4, label: 'tag' })
    const [link, setLink] = useState('')
    const [tag, setTag] = useState('')
    const [caption, setCaption] = useState(null)
    const [PDF, setPDF] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null);

    const handleUpload = async () => {
        try {
            if (type.value === 1 || type.value === 3) {
                const formData = new FormData();
                formData.append('file', type.value === 1 ? PDF : selectedImage);
                formData.append('caption', caption);
                formData.append('type_id', type.value);

                const response = await sendRequest({
                    method: 'POST', route: `/addResource/file/${ideaId}`, body: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setIsUploaded(!isUploaded)
                handleCloseModal();
            } else {
                const data = {
                    text: type.value === 2 ? link : tag,
                    caption: caption,
                    type_id: type.value,
                };
                const response = await sendRequest({ method: 'POST', route: `/addResource/text/${ideaId}`, body: data, });
                setIsUploaded(!isUploaded)
                handleCloseModal();
            }
        } catch (error) {
            console.error('error:', error);
        }
    };

    return (
        <div className='flex flex-col gap-2'>
            <h6 className='self-center font-semibold mb-2'>Add Resources</h6>
            <div className='flex flex-col gap-1'>
                <label className='font-medium px-2'>Select resource type</label>
                <Select className='px-1' isSearchable placeholder='type' defaultValue={type} onChange={(value) => setType(value)} options={[
                    { value: 1, label: 'pdf' },
                    { value: 2, label: 'link' },
                    { value: 3, label: 'image' },
                    { value: 4, label: 'tag' },
                ]} styles={{
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
            {type.value === 2 ? <Input label={'Paste link'} onChange={(link) => setLink(link)} />
                : type.value === 1 ? <Input2 label={'Upload file'} type='file' onChange={(pdf) => setPDF(pdf)} accept={'application/pdf'} />
                    : type.value == 3 ? <Input2 label={'Upload file'} type='file' onChange={(image) => setSelectedImage(image)} accept={'image/*'} />
                        : <></>}
            {selectedImage && (
                <div className='self-center'>
                    <img
                        src={URL.createObjectURL(selectedImage)}
                        alt={`Selected Image`}
                        style={{ maxWidth: '150px', maxHeight: '150px' }}
                    />
                </div>
            )}
            {type.value !== 4 ?
                <Input label={'Add a caption'} onChange={(caption) => setCaption(caption)} />
                : <Input label={'Add a tag'} onChange={(tag) => setTag(tag)} />
            }
            <div className='flex justify-center gap-5 w-full mt-2'>
                <Button classname={"w-20 h-8"} text={'Cancel'} onClick={handleCloseModal} />
                <Button classname={"w-20 h-8 self-center"} text={'Submit'} onClick={handleUpload} />
            </div>
        </div>
    )
}

export default ResourceForm