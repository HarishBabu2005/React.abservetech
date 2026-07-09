import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("component render")
    },[count])
  return (
    <div>
        <h1>Counter</h1>
        <p>{count}</p>
         {console.log("run")}
        <button onClick={()=>{setCount(prev=> prev+1); setCount(prev=> prev+1) } }>Add bro</button>
        <button onClick={()=>setCount(prev=>prev-1)}>Sub bro</button>
    </div>
  )
}

export default Counter
