import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Home from '../Home'
import { Routes, Route } from 'react-router-dom'
import './style.css'
import Users from '../Users'
import Collections from '../Collection'
import Files from '../Files'
import Chats from '../Chats'
import AdminRoutes from '../../AdminRoutes'

const PanelLayout = () => {
    return (
        <div className='grid-container'>
            {/* <Header />
            <Sidebar /> */}
            {/* <Routes>
                <Route index element={<Home />} />
                <Route path='/admin/users' element={<Users />} />
                <Route path='/admin/collections' element={<Collections />} />
                <Route path='/admin/files' element={<Files />} />
                <Route path='/admin/discussions' element={<Chats />} />
            </Routes> */}
            <Header />
            <Sidebar />
            <Routes>
                <Route index element={<Home />} />
                <Route path='users' element={<Users />} />
                <Route path='collections' element={<Collections />} />
                <Route path='files' element={<Files />} />
                <Route path='discussions' element={<Chats />} />
            </Routes>
        </div>
    )
}

export default PanelLayout