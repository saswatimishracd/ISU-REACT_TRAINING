import React from 'react'

const ComponentY = (props)=>{

      if(props.isLogin){
        <h1>Welcome User</h1>
      }
      else{
        <h1>Please Login</h1>
      }

} 

const ComponentX = () => {
    const isLogin = true
   
    const fruits = ["Apple", "Banana", "Mango", "Grapes"]

  return (
    <>
    {isLogin ? <h1>Welcome User</h1> : <h1>Please login</h1>}
    {isLogin && <h1>Welcome User</h1>}
    <ComponentY isLogin={isLogin} />
    {fruits.map((fruit, index) => {
      return <h1 key={index}>{fruit}</h1>
    })}
    </>
  )
}

export default ComponentX
