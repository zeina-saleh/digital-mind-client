import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import Button2 from '../../components/UI/Button2';
import './style.css'

const Map = () => {

    const print = () => {
        console.log('clicked')
    }
    return (
        <div className='flex flex-col gap-4'>
            <div className='line w-10/12 self-center'></div>
            <div className='flex flex-col items-center gap-5'>
                <div className='flex justify-between w-10/12'>
                    <div></div>
                    <div className='flex gap-1'>
                        <Button2 text={"Group Discussion"} onClick={print} icon={faComments} />
                        <Button2 text={"Add Resource"} onClick={print} icon={faPlus} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map