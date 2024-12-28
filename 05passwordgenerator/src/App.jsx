import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [characterAllowed,setCharacterAllowed] = useState(false)
  const [password,setPassword] = useState("")
  const passwordRef = useRef(null)
const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(characterAllowed) str+="!@#$%^&*_+=~`{}[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      console.log(char);
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,characterAllowed,setPassword])

const copyToClipboard = useCallback(() =>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,3)
 window.navigator.clipboard.writeText(password.slice(0,3))
},[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto  shadow-md
      rounded-xl px-4 py3 my-8 bg-gray-800 text-orange-500 pb-4' >
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button
            onClick={copyToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
                min={6}
                max={100}
                className='cursor-pointer'
                onChange={(e)=>{setLength(e.target.value)}}
              />
              <label htmlFor="">Length : {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={()=>{
                  setNumberAllowed((prev)=>!prev)
                }}
               />
               <label htmlFor="">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                type="checkbox"
                defaultChecked={characterAllowed}
                id="characterAllowed"
                onChange={()=>{
                  setCharacterAllowed((prev)=>!prev)
                }}
               />
               <label htmlFor="">Characters</label>
            </div>

            </div>
      </div>
    </>
  )
}

export default App
