import React from 'react'

import GrandChild from './GrandChild'
const Child = (props) => {
  return (
    <div>
        <h1>Child</h1>
        <GrandChild name={props.name}/>
    </div>
  )
}

export default Child