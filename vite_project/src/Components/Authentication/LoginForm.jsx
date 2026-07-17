import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import api from "../API/Axios"
import { useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
const LoginForm = () => {
  const notify = () => toast("Login Successfully");
  const navigate=useNavigate()
  const [users,setUsers]=useState({
      email:"",
      password:""
    })
    const handleChange=(e)=>{
      const {name,value}=e.target;
      setUsers({
        ...users,
        [name]:value
      })

    }
  const handleSubmit=async(e)=>{
       e.preventDefault()
       try {
         const res=await api.post("/users/login",users)
         const token=res.data.token
        localStorage.setItem("token",token)
         
         console.log(token)
          setUsers({
        email:"",
        password:""
       })
       navigate("/dashboard")
       } catch (error) {
        console.error(error)
       }
      
  } 
  return (
    <div>
        <h1>Login Form</h1>
        <form style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"10px"}} onSubmit={handleSubmit}>
        <label>Email: {users.email}</label>
        <input type='email' onChange={handleChange} name='email' value={users.email} required placeholder='Enter the email'/>
        <label >Password: {users.password}</label>
        <input type="password" onChange={handleChange} name='password'value={users.password} required placeholder='Enter the password'/>
        <button onClick={notify} >Login</button>
        <ToastContainer/>
        </form>
    </div>
  )
}

export default LoginForm