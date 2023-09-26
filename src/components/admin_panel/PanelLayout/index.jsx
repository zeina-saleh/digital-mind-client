import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Home from '../Home'
import { Routes, Route } from 'react-router-dom'
import './style.css'
import UsersTable from '../UsersTable'
import Collections from '../Collection'
import Files from '../Files'
import Chats from '../Chats'

const PanelLayout = () => {
    return (
        <div className='grid-container'>
            <Header />
            <Sidebar />
            <Routes>
                <Route index element={<Home />} />
                <Route path='users' element={<UsersTable />} />
                <Route path='collections' element={<Collections />} />
                <Route path='files' element={<Files />} />
                <Route path='discussions' element={<Chats />} />
            </Routes>
        </div>
    )
}

export default PanelLayout