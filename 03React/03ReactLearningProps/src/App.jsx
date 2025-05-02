import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'


function App() {

  return (
    <>
      <h1 className='bg-orange-400 rounded-xl p-4 mb-4'>Hello World!</h1>
      <Card userName = "Tom" />
      <Card userName = "Jerry" />
      <Card userName = "Demon"/>
    </>
  )
}

export default App
