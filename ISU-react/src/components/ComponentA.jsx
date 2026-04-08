import React,{createContext, useContext, useState} from 'react'
import ComponentB from './ComponentB'

export const userContext = createContext()

const ComponentA = () => {
    const [user, setUser] = useState("John") 
  return (
    <userContext.Provider value={user}>
    <div>
      <h1>Component A</h1>
      <p>User: {user}</p>
      <ComponentB />
    </div>
    </userContext.Provider>
  )
}

export default ComponentA
