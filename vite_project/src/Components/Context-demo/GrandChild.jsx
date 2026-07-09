import React, { useContext } from 'react'
import UserContext from '../../Context/UserContext'

const GrandChild = (props) => {
  const value=useContext(UserContext)
  return (
    <div>
        <h1>grandChild: {props.name}</h1>
        <p>{value}</p>
    </div>
  )
}

export default GrandChild