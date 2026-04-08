import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ColorList from './components/ColorList'
import Product from './components/Product'
import AddMessage from './components/AddMessage'
import UseRef from './components/UseRef'
import UseState from './components/UseState'

function App() {

  return (
    <> 
    <UseRef />
    <UseState />
    <AddMessage />
    <Product name="Samsung" price="50000" />
    <ColorList />
     </>
  )
}

export default App
