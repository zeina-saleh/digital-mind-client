import React from 'react'
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwatchbook, faMagnifyingGlass, faCodeBranch, faFolderTree, faComments  } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo-white.svg'

const Sidebar = () => {
    return (
        <aside id='sidebar'>
            <div className='sidebar-title mt-12'>
                <div className='flex items-center sidebar-brand gap-1 font-family'>
                <Link to="/admin"><img src={logo} className='icon_header text-[#1e1e1e] cursor-pointer'></img></Link>
                    <p className='text-white'>Digital Mind</p>
                </div>
                <span className='icon close_icon'>X</span>
            </div>

            <ul className='flex flex-col sidebar-list ml-10 gap-2 mt-16'>
                <li className='sidebar-list-item rounded-l-full focus:bg-[#F3F5F8]'>
                    <Link to="/admin/users">
                        <FontAwesomeIcon icon={faUser} className='icon text-[#F3F5F8] cursor-pointer' /> Users
                    </Link>
                </li>
                <li className='sidebar-list-item rounded-l-full'>
                    <Link to="/admin/collections">
                        <FontAwesomeIcon icon={faSwatchbook} className='icon text-[#F3F5F8] cursor-pointer' /> Collections
                    </Link>
                </li>
                <li className='sidebar-list-item rounded-l-full'>
                    <Link to="/admin/files">
                        <FontAwesomeIcon icon={faFolderTree} className='icon text-[#F3F5F8] cursor-pointer' /> Files
                    </Link>
                </li>
                <li className='sidebar-list-item rounded-l-full'>
                    <Link to="/admin/discussions">
                        <FontAwesomeIcon icon={faComments} className='icon text-[#F3F5F8] cursor-pointer' /> Discussions
                    </Link>
                </li>
                {/* <li className='sidebar-list-item rounded-l-full'>
                    <Link to="/admin">
                        <FontAwesomeIcon icon={faComments} className='icon text-[#F3F5F8] cursor-pointer' /> Discussions
                    </Link>
                </li> */}
            </ul>

        </aside>
    )
}

export default Sidebar