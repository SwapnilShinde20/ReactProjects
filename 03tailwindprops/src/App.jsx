import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username : 'Flix',
    age:18
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Css</h1>
    <Card username="Flix" btnText="click me" />
    <Card username="Swapnil" btnText="visit me" />

    </>
  )
}

export default App
