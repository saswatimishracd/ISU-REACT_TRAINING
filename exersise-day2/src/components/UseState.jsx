import React, { useState } from 'react'

const UseState = () => {
    const [show,setShow] = useState(false)

    const users = [{"id":1,"name":"John","isAdmin":true},
                  {"id":2,"name":"Nancy","isAdmin":false},
                  {"id":3,"name":"Edward","isAdmin":true},
                  {"id":4,"name":"Sansa","isAdmin":true}]

 
 return (
    <>

        <button onClick={()=>setShow(!show)}>Show Admins</button>

    {
         users.map((user)=>{
           return( show 
            ? user.isAdmin && <h1 key={user.id}>Admin User{user.id} Name: {user.name}</h1>
            : ""
           )
 })
    }
    </>
  )
}

export default UseState
