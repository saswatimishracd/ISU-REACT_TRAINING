import React, { useEffect, useRef, useState } from 'react'

const Component1 = () => {
    
    const inputRef = useRef()
    let [name,setName] = useState("John")

    useEffect(() => {
        setName("Doe")
        inputRef.current.focus()
    }, [name])
    
  return (
    <>
    <br />
    <br />
    <input type="text" ref={inputRef} value={name} placeholder='Enter something' />
    </>
  )
}

export default Component1
