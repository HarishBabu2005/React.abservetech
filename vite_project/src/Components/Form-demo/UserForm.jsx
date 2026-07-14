import React, { useState } from 'react'
import axios from 'axios'
const UserForm = () => {
  const[users,setUsers]=useState({
    name:"",
    email:"",
    age:""
  })
   const handleChange=(e)=>{
    const {name,value}=e.target;
    setUsers({
      ...users,
      [name]:value
      
    });
    
    
  }
   const handleSubmit=async(e)=>{
   
    e.preventDefault();
    try {
      const res=await axios.post("http://localhost:5000/api/users/create",users)
      console.log("Successfully Registered",res.data)
       setUsers({
      name:"",
      email:"",
      age:""

    })  
    } catch (e) {
        console.log(e)
      alert("fail to send the data")  
    }
    
   
          
          
         
          
   }
 
  return (
    <>
    <div>
        <h1>User Form</h1>
        <h3>Name:{users.name}</h3>
        <h3>Email: {users.email}</h3>
        <h3>Age: {users.age}</h3>
        <form onSubmit={handleSubmit}>
        <input placeholder='enter the name' name='name' value={users.name} type='text' required onChange={handleChange} ></input>
        <input placeholder='enter the email' name='email' value={users.email} type='email' required onChange={handleChange}></input>
        <input placeholder='enter the age' name='age' value={users.age} type='number' required onChange={handleChange}></input>
        <button>submit</button>
      </form>
    </div> 
    
    </>
  )
}

export default UserForm