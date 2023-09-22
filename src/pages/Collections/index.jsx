import React from 'react'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../config/request'
import Button2 from '../../components/UI/Button2'
import { faPlus, faBookmark, faPen } from '@fortawesome/free-solid-svg-icons';
import CollectionItem from '../../components/base/CollectionItem'
import './style.css'
import AddModal from '../../components/base/AddModal';
import DeleteModal from '../../components/base/DeleteModal';

const Collections = () => {

  const [collections, setCollections] = useState([]);
  const [title, setTitle] = useState('');
  const [collectionId, setCollectionId] = useState('')
  const [ideaId, setIdeaId] = useState('')
  const [ideaFunc, setIdeaFunc] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const [openConsentModal, setOpenConsentModal] = useState(false)
  const handleOpenConsentModal = () => setOpenConsentModal(true)
  const handleCloseConsentModal = () => setOpenConsentModal(false)

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

  const unhide = () => {
    setEditMode(!editMode)
  }

  const handleAddCollection = () => {
    setIdeaFunc(false)
    handleOpenModal()
    console.log(ideaFunc)
  }

  return (
    <div className='flex flex-col items-center gap-5'>

      <div className='flex flex-col items-center w-10/12 min-h-screen gap-12'>
        <div className='flex items-center justify-between w-10/12'>
          <div className='text-3xl page-title'>My Collections</div>
          <div className='flex gap-1'>
            {/* <Button2 text={"Saved Ideas"} onClick={unhide} icon={faBookmark} /> */}
            <Button2 text={"Create Collection"} onClick={handleAddCollection} icon={faPlus} />
            <Button2 text={"Edit"} onClick={unhide} icon={faPen} />
          </div>
        </div>

        <div className='flex flex-col w-10/12 gap-6 py-2'>
          {collections.map(collection => (
            <CollectionItem key={collection.id} collection={collection} handleOpenModal={handleOpenModal}
              setIdeaFunc={setIdeaFunc} setCollectionId={setCollectionId}
              handleOpenConsentModal={handleOpenConsentModal} setIdeaId={setIdeaId} 
              editMode={editMode} setTitle={setTitle} />
          ))}
        </div>

        <AddModal openModal={openModal} ideaFunc={ideaFunc} onCancel={handleCloseModal} title={title} setTitle={setTitle} collectionId={collectionId} editMode={editMode} setEditMode={setEditMode} ideaId={ideaId}/>
        <DeleteModal openModal={openConsentModal} ideaFunc={ideaFunc} onCancel={handleCloseConsentModal} setTitle={setTitle} collectionId={collectionId} ideaId={ideaId} editMode={editMode} setEditMode={setEditMode}/>

      </div>
    </div>
  )
}

export default Collections