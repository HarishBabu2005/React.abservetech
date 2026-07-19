import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

 const token=localStorage.getItem("token");
 console.log("ProtectedRoute",token)
 if(!token){
    return <Navigate to="/login"/>
 }

  return (
    children
  )
}

export default ProtectedRoute