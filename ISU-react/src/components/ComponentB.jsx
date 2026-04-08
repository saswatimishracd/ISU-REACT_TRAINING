import React, { useContext } from 'react'
import ComponentC from './ComponentC'
import { userContext } from './ComponentA'

const ComponentB = () => {
    const user = useContext(userContext)
  return (
    <div>
      <h1>ComponentB: </h1>
      <p>User: {user}</p>

    <ComponentC />

    </div>
  )
}

export default ComponentB
