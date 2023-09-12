import React from 'react'
import Button2 from '../../components/UI/Button2'
import { faPlus, faBookmark } from '@fortawesome/free-solid-svg-icons';

const Collections = () => {
  const print = () => {
    console.log('clicked')
  }
  return (
    <div className='flex flex-col items-center gap-5'>
    <div className='flex pl-5 w-10/12 h-screen gap-5 flex-wrap'>
      <div className='flex w-full justify-between'>
      <Button2 text={"Saved Ideas"} onClick={print} icon={faBookmark}/>
      <Button2 text={"Create Collection"} onClick={print} icon={faPlus} />
      </div>
    </div>
    </div>
  )
}

export default Collections