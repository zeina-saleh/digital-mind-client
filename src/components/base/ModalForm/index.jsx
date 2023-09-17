import React from 'react'
import Select from 'react-select'
import { useState } from 'react'
import Input from '../../UI/Input'
import Input2 from '../../UI/Input2'
import Button from '../../UI/Button'
import { sendRequest } from '../../../config/request'

const ModalForm = ({ handleCloseModal, ideaId, setIsUploaded, isUploaded }) => {

    const [type, setType] = useState({ value: 4, label: 'tag' })
    const [link, setLink] = useState('')
    const [tag, setTag] = useState('')
    const [caption, setCaption] = useState(null)
    const [PDF, setPDF] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null);

    const handleUpload = async () => {
        console.log(type.value);
        try {
            if (type.value === 1 || type.value === 3) {
                const formData = new FormData();
                formData.append('file', type.value === 1 ? PDF : selectedImage);
                formData.append('caption', caption);
                formData.append('type_id', type.value);

                const response = await sendRequest({ method: 'POST', route: `/addResource/file/${ideaId}`, body: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setIsUploaded(!isUploaded)
                handleCloseModal();
                console.log(response);
            } else {
                const data = {
                    text: type.value === 2 ? link : tag,
                    caption: caption,
                    type_id: type.value,
                };
                const response = await sendRequest({ method: 'POST', route: `/addResource/text/${ideaId}`, body: data, });
                setIsUploaded(!isUploaded)
                handleCloseModal();
                console.log(response);
            }
        } catch (error) {
            console.error('error:', error);
        }
    };

    const print = () => {
        console.log('print')
    }

    return (
        <div className='flex flex-col gap-4'>
            <div>
                <label className='font-medium px-2'>Select resource type</label>
                <Select className='px-1' isSearchable placeholder='type' defaultValue={type} onChange={(value) => setType(value)} options={[
                    { value: 1, label: 'pdf' },
                    { value: 2, label: 'link' },
                    { value: 3, label: 'image' },
                    { value: 4, label: 'tag' },
                ]} />
            </div>
            {type.value === 2 ? <Input label={'Paste link'} className={"input2"} wrapper={"wrapper2"} onChange={(link) => setLink(link)} />
                : type.value === 1 ? <Input2 label={'Upload file'} type='file' className={"input2"} wrapper={"wrapper2"} onChange={(pdf) => setPDF(pdf)} accept={'application/pdf'} />
                    : type.value == 3 ? <Input2 label={'Upload file'} type='file' className={"input2"} wrapper={"wrapper2"} onChange={(image) => setSelectedImage(image)} accept={'image/*'} />
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
                <Input label={'Add a caption'} className={"input2"} wrapper={"wrapper2"} onChange={(caption) => setCaption(caption)} />
                : <Input label={'Add a tag'} className={"input2"} wrapper={"wrapper2"} onChange={(tag) => setTag(tag)} />
            }
            <div className='flex justify-center gap-5 w-full'>
                <Button classname={"w-20 h-8 self-center"} text={'Submit'} onClick={handleUpload} />
                <Button classname={"w-20 h-8"} text={'Cancel'} onClick={handleCloseModal} />
            </div>
        </div>
    )
}

export default ModalForm