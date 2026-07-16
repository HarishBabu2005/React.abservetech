import axios from 'axios'
import React, { useEffect, useState } from 'react'
import api from "./Axios"
 const Users = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        //  async function getUsers(){
        //       const res=  await fetch("https://jsonplaceholder.typicode.com/users")
        //   const data =await res.json();
        //   setUsers(data)
         
        //  }
        //  getUsers()
         async function getUsers(){
              const res=  await api.get("/users/getall")
          const data =res.data
          setUsers(data)
         
         }
         getUsers()
          
    },[])

  return (
    <div>Users
        <ul>
            {
                 users.map((user)=>{
            
                   return <li key={user.id}>{user.name}</li>
          })
            }
        </ul>
    </div>
  )
}

export default Users