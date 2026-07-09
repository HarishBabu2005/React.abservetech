import React, { useState } from 'react'

const Form = () => {
const[name,Setname]=useState("")
  return (
    <div>
        <h1>Student Form</h1>
        <label>Student Name: without value</label>
        <input placeholder='Enter your name' type='text'   onChange={(e)=>{console.log(e.target.value);Setname(e.target.value)}}></input><br/>
         <label>Student Name: with value </label>
        <input placeholder='Enter your name' type='text'  value={name} onChange={(e)=>{console.log(e.target.value);Setname(e.target.value)}}></input>
        <h3>Name: {name}</h3>
        <button onClick={()=>Setname("")}>reset</button>
    </div>
  )
}

export default Form