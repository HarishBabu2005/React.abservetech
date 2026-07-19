import React from 'react'
import { Button } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'

const DashBoard = () => {
const navigate=useNavigate()
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
        <Button onClick={handlelogout}>Log out</Button>
      </div>
        DashBoard
        <Outlet/>
    </div>
  )
}

export default DashBoard