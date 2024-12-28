import { useState } from "react"


function App() {
  let [color,setColor] = useState('green')
  return (
    <>
    <div className='w-full h-screen' 
      style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 justify-center shadow-xl bg-white px-3 py-2 px-2 rounded-xl">
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"red"}}
            onClick={()=> setColor("red")}
          >Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"green"}}
            onClick={()=> setColor("green")}
          >Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"blue"}}
            onClick={()=> setColor("blue")}
          >Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"olive"}}
            onClick={()=> setColor("olive")}
          >olive</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"lavender"}}
            onClick={()=> setColor("lavender")}
          >lavender</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"gray"}}
            onClick={()=> setColor("gray")}
          >gray</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"yellow"}}
            onClick={()=> setColor("yellow")}
          >yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"pink"}}
            onClick={()=> setColor("pink")}
          >pink</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"purple"}}
            onClick={()=> setColor("purple")}
          >purple</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"white"}}
            onClick={()=> setColor("white")}
          >white</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"black"}}
            onClick={()=> setColor("black")}
          >black</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
