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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppHeader />
    <center>
      <h1>Helloo this is the center part</h1>
    </center>
    <SideBar />
    <AppFooter />
    </>
  )
}

export default App
