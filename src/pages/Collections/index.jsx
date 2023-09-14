import React from 'react'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../config/request'
import Button2 from '../../components/UI/Button2'
import { faPlus, faBookmark, faPen } from '@fortawesome/free-solid-svg-icons';
import CollectionItem from '../../components/base/CollectionItem'
import Modal from 'react-modal'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button';
import './style.css'
import EditModal from '../../components/base/EditModal';
import AddModal from '../../components/base/AddModal';

const Collections = () => {

  const [collections, setCollections] = useState([]);
  // const [collectionTitle, setCollectionTitle] = useState('');
  // const [ideaTitle, setIdeaTitle] = useState('');
  const [title, setTitle] = useState('');
  // const [isAddIdeaClicked, setIsAddIdeaClicked] = useState(false);
  const [collectionId, setCollectionId] = useState('')
  const [ideaId, setIdeaId] = useState('')
  const [ideaFunc, setIdeaFunc] = useState(false)

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

 

  const fetchCollections = async () => {
    try {
      const response = await sendRequest({ route: "/getUserCollections", body: "" });
      setCollections(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, [title, ideaId]);

  return (
    <div className='flex flex-col items-center gap-5'>

      <div className='flex flex-col items-center w-10/12 h-screen gap-12'>
        <div className='flex justify-between w-10/12'>
          <Button2 text={"Saved Ideas"} onClick={print} icon={faBookmark} />
          <div className='flex gap-1'>
            <Button2 text={"Create Collection"} onClick={() => handleOpenModal()} icon={faPlus} />
            <Button2 text={"Edit"} onClick={print} icon={faPen} />
          </div>
        </div>

        <div className='flex flex-col w-10/12 gap-6 py-2'>
          {collections.map(collection => (
            <CollectionItem key={collection.id} collection={collection} handleOpenModal={handleOpenModal}
              setIdeaFunc={setIdeaFunc} setCollectionId={setCollectionId}
              handleOpenConsentModal={handleOpenConsentModal} setIdeaId={setIdeaId} editMode={editMode}/>
          ))}
        </div>

       <AddModal openModal={openModal} ideaFunc={ideaFunc} onCancel={handleCloseModal} title={title} setTitle={setTitle} collectionId={collectionId} />

      </div>
    </div>
  )
}

export default Collections