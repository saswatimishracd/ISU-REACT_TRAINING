import React, { useRef } from 'react'

const UseRef = () => {
    
    const input1Ref = useRef(null)
    const input2Ref = useRef(null)
    const input3Ref = useRef(null)

    const handleInput = (e,nextRef)=> {
        if(e.target.value.length === 4){
            nextRef.current.focus()
        }
    }

  return (
    <div>
        <h1>Exercise 2 useRef example</h1>
        <h5>Type 4 letters to move to focus on next Input Field</h5>
        <br /><br />
        <h6>Input Field 1:</h6>
      <input type="text" placeholder='Enter Here' ref={input1Ref} 
      onChange={(e)=>handleInput(e,input2Ref)} />
      <br />      <br />
        <h6>Input Field 2:</h6>
      <input type="text" placeholder='Enter Here' ref={input2Ref} 
      onChange={(e)=>handleInput(e,input3Ref)} />
      <br />      <br />
        <h6>Input Field 3:</h6>
      <input type="text" placeholder='Enter Here' ref={input3Ref} 
      onChange={(e)=>handleInput(e,input1Ref)} />
      <br />      <br />

    </div>
  )
}

export default UseRef
