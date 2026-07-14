import React, { useEffect, useState } from 'react'

 const Users = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
         async function getUsers(){
              const res=  await fetch("https://jsonplaceholder.typicode.com/users")
          const data =await res.json();
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