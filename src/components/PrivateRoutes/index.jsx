import React from 'react'
import {Navigate} from 'react-router-dom'

const PrivateRoutes = ({children}) => {

    const token = localStorage.getItem('access_token');
  return (
    token? children : <Navigate to="/userlogin" />
  )
}

export default PrivateRoutes