import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AppHeader from './components/header/AppHeader'
import AppFooter from './components/footer/AppFooter'

function SideBar() {
  return(<div><h5>Hello this is sideBar</h5></div>)
}
import React from 'react'
import Component1 from './components/Component1'
import ComponentA from './components/ComponentA'
import ComponentX from './components/ComponentX'

const Greet = (props) => {
  return ( <h1>Hello {props.name}. You are a {props.gender}</h1> )
}



function App() {
  let [count, setCount] = useState(0)
  let [name, setName] = useState("John")

  function handleCount(){
    setCount(count+1)
  }
  function handleName(e){
    setName(e.target.value)
  }

  return (
    <>
    {/* <h1>Hello {count}</h1>
    <h1>Name: {name}</h1>
    <button onClick={handleCount}>Change Count</button>
    <br />
    <input type="text" value={name} onChange={handleName}/>

  <Greet name="John" gender="male" /> */}
  <Component1 />
  <ComponentA />
  <ComponentX />
    </>
  )
}

export default App
