import React, { useState } from 'react'

const StudentForm = () => {
  const[Student,SetStudent]=useState({
    name:"",
    dep:"",
    clg:""
  })
   const handleChange=(e)=>{
    const {name,value}=e.target;
    SetStudent({
      ...Student,
      [name]:value
      
    });
    
  }
 
  return (
    <div>
        <h1>Student Form</h1>
        <h3>Name:{Student.name}</h3>
        <h3>Department: {Student.dep}</h3>
        <h3>College: {Student.clg}</h3>
        <input placeholder='enter the name' name='name' value={Student.name} type='text' onChange={handleChange}></input>
        <input placeholder='enter the department' name='dep' value={Student.dep} type='text' onChange={handleChange}></input>
        <input placeholder='enter the College' name='clg' value={Student.clg} type='text' onChange={handleChange}></input>
    </div> 
  )
}

export default StudentForm