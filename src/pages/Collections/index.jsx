import React from 'react'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../config/request'
import Button2 from '../../components/UI/Button2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBookmark } from '@fortawesome/free-solid-svg-icons';
import CollectionItem from '../../components/base/CollectionItem'
import Modal from 'react-modal'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button';
import './style.css'

const Collections = () => {
  
  const [collections, setCollections] = useState([]);
  const [collectionTitle, setCollectionTitle] = useState('');
  const [ideaTitle, setIdeaTitle] = useState('');
  const [isAddIdeaClicked, setIsAddIdeaClicked] = useState(false);
  const [collectionId, setCollectionId] = useState('')
  const [ideaId, setIdeaId] = useState('')

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
  }, [collectionTitle, ideaTitle, ideaId]);


  const handleCreateCollection = () => {
    setIsAddIdeaClicked(false)
    handleOpenModal()
  }

  const createCollection = async () => {
    try {
      const response = await sendRequest({ method: 'POST', route: '/createCollection', body: { title: collectionTitle }, });
      console.log(response);
      setCollectionTitle('');
      handleCloseModal();
    } catch (error) {
      console.log(error);
    }
  }

  const addIdea = async () => {
    try {
      const response = await sendRequest({ method: 'POST', route: `/addIdea/${collectionId}`, body: { title: ideaTitle }, });
      console.log(response);
      setIdeaTitle('')
      handleCloseModal();
    } catch (error) {
      console.log(error);
    }
  }

  const deleteIdea = async () => {
    try {
      const response = await sendRequest({ route: `/deleteIdea/${ideaId}`, body: "", });
      console.log(response);
      setIdeaId('')
      handleCloseConsentModal();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex flex-col items-center gap-5'>

      <div className='flex flex-col items-center w-10/12 h-screen gap-12'>
        <div className='flex justify-between w-10/12'>
          <Button2 text={"Saved Ideas"} onClick={print} icon={faBookmark} />
          <Button2 text={"Create Collection"} onClick={handleCreateCollection} icon={faPlus} />
        </div>

        <div className='flex flex-col w-10/12 gap-6 py-2'>
          {collections.map(collection => (
            <CollectionItem key={collection.id} collection={collection} handleOpenModal={handleOpenModal}
              setIsAddIdeaClicked={setIsAddIdeaClicked} setCollectionId={setCollectionId}
              handleOpenConsentModal={handleOpenConsentModal} setIdeaId={setIdeaId} />
          ))}
        </div>
        <Modal isOpen={openModal} onRequestClose={handleCloseModal} className='mini-modal flex flex-col items-center w-96 h-50 bg-white'>
          <div className='flex flex-col gap-7 w-full'>
            <Input label={`Add a title for your ${isAddIdeaClicked ? 'idea' : 'collection'}`} className={"input2"} wrapper={"wrapper2"} placeholder='type something'
              onChange={isAddIdeaClicked ? (ideaTitle) => setIdeaTitle(ideaTitle) : (collectionTitle) => setCollectionTitle(collectionTitle)} />

            <div className='flex gap-5 w-full'>
              <Button classname={"w-20 h-8"} text={'Add'} onClick={isAddIdeaClicked ? addIdea : createCollection} />
              <Button classname={"w-20 h-8"} text={'Cancel'} onClick={handleCloseModal} />
            </div>
          </div>
        </Modal>

        <Modal isOpen={openConsentModal} onRequestClose={handleCloseConsentModal} className='mini-modal flex flex-col gap-5 items-center w-96 h-50 bg-white'>
          <div className='flex flex-col gap-7 w-full'>Are you sure you want to delete this idea?</div>
          <div className='flex gap-5 w-full'>
            <Button classname={"w-20 h-8"} text={'Yes'} onClick={deleteIdea} />
            <Button classname={"w-20 h-8"} text={'No'} onClick={handleCloseConsentModal} />
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Collections