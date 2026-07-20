
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'
import api from "../../Components/API/Axios"

const DashBoard = () => {
   const [user,setUser]=useState({});
const navigate=useNavigate()
const fetchUser=async()=>{
  try {
    const res=await api.get("/users/profile");
  console.log(res.data.user)
  setUser(res.data.user);
  } catch (e) {
    console.error(e)
  }
  
}
useEffect(()=>{
     fetchUser();
},[]);
const handleLogout = () => {
 
    const confirmLogout = window.confirm(
        "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("token");

    navigate("/login", { replace: true });
};
  return (
    <div>
      <div style={{display:"flex", flexDirection:"row-reverse"}}>
        <Button onClick={handleLogout}>Log out</Button>
      </div>
        DashBoard
        <h2>Welcome,{user.name}</h2>
        <Outlet/>
    </div>
  )
}

export default DashBoard