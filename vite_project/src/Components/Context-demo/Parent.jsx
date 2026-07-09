import React from 'react'
import Child from './Child'

const Parent = (props) => {
  return (
    <div>
        <h1>Parent</h1>
        <Child name={props.name}/>
    </div>

  )
}

export default Parent