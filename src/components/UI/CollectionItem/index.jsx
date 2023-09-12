import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './style.css'

const CollectionItem = ({ collection }) => {
    return (
        <div className='collection-item flex items-center justify-between px-2'>
            <p className='text-xl'>{collection.title}</p>
            <FontAwesomeIcon icon={faChevronDown} style={{ color: "#1e1e1e", }} />
        </div>
    )
}

export default CollectionItem