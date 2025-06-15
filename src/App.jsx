import { useState } from 'react'
import './App.css'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="py-8 px-[10%] w-screen min-h-screen text-white font-thin bg-gray-800">
      <Navbar/>
      <Mainroutes/>
    </div>  
  )
}

export default App
