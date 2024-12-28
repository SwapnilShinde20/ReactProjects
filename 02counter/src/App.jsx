import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount] = useState(0)
  //let count = 5
  const addValue = ()=>{
    count = count + 1
    if(count>=20){
      count = 20
    } 
    setCount(count)
  }
  const remValue = ()=>{
    count = count - 1
    if(count<=0){
      count = 0
    }
    setCount(count)
  }
  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={addValue} >Add Value{count}</button>
      <button onClick={remValue}>Remove Value{count}</button>
    </>
  )
}

export default App
