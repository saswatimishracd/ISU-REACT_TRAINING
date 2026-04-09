import { useState } from 'react'
import './App.css'
import ButtonIndexCss from './ButtonIndexCss'
import StatusCard from './StatusCard'
import BrandPrimiaryCss from './BrandPrimiaryCss'
import NavigationLink from './NavigationLink'

function App() {

  return (
    <>
    <h1>----------Button Style----------</h1>
      <ButtonIndexCss />
    <h1>----------Status Card Prop passing----------</h1>
      <StatusCard status="error" />
    <h1>----------Using variable from .root----------</h1>
      <BrandPrimiaryCss />
    <h1>---Navigation link that hides in mobile---</h1>
      <NavigationLink />
    </>
  )
}

export default App
