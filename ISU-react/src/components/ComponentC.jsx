import React, { useContext } from 'react'
import { userContext } from './ComponentA'

const ComponentC = () => {
    const user  = useContext(userContext)
  return (
    <div>
      <h1>ComponentC: </h1>
      <p>User: {user}</p>
    </div>
  )
}

export default ComponentC
