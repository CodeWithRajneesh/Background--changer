import { useState } from 'react'
// import './App.css'

function App() {

  const [color, setColor] = useState("green")
  return (
    <>
      <div className="W-full h-screen duration-200 py-2" style={{ backgroundColor: color }}>

        <div className="flex flex-wrap justify-items-center bg-white px-2 gap-3 py-3 rounded-3xl">
          <button onClick={() => setColor("red")} className='outline-none rounded-full px-5 py-1 shadow-xl font-bold text-white' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} className='outline-none rounded-full px-5 py-1 shadow-xl font-bold text-white' style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("yellow")} className='outline-none rounded-full px-5 py-1 shadow-xl font-bold text-white' style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={() => setColor("blue")} className='outline-none rounded-full px-5 py-1 shadow-xl font-bold text-white' style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("pink")} className='outline-none rounded-full px-5 py-1 shadow-xl font-bold text-white' style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={() => setColor("cyan")} className='outline-none rounded-full px-5 py-1 shadow-xl font-bold text-white' style={{ backgroundColor: "cyan" }}>cyan</button>

        </div>
      </div>


    </>
  )
}

export default App
