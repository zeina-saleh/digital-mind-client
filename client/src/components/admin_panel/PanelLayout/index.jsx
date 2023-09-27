import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Home from '../Home'
import { Routes, Route } from 'react-router-dom'
import './style.css'
import UsersTable from '../UsersTable'
import Discussions from '../ChatRooms'

const PanelLayout = () => {
    return (
        <div className='grid-container'>
            <Header />
            <Sidebar />
            <Routes>
                <Route index element={<Home />} />
                <Route path='users' element={<UsersTable />} />
                {/* <Route path='collections' element={<Collections />} />
                <Route path='files' element={<Files />} /> */}
                <Route path='discussions' element={<Discussions />} />
            </Routes>
        </div>
    )
}

export default PanelLayout