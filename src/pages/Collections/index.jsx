import React from 'react'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../config/request'
import { Link } from 'react-router-dom'
import Button2 from '../../components/UI/Button2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBookmark } from '@fortawesome/free-solid-svg-icons';
import CollectionItem from '../../components/UI/CollectionItem';
import './style.css'

const Collections = () => {
  const print = () => {
    console.log('clicked')
  }
  const [collections, setCollections] = useState([]);

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
  }, []);

  return (
    <div className='flex flex-col items-center gap-5'>
      <div className='flex flex-col items-center w-10/12 h-screen gap-12'>
        <div className='flex w-full justify-between'>
          <Button2 text={"Saved Ideas"} onClick={print} icon={faBookmark} />
          <Button2 text={"Create Collection"} onClick={print} icon={faPlus} />
        </div>
        <div className='flex flex-col w-10/12 gap-6'>
          {collections.map(collection => (
            <Link key={collection.id} to={`/home/planner`}>
              <CollectionItem collection={collection} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collections