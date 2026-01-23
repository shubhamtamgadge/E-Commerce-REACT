import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import Cart from "./pages/Cart"

function App() {



  return (
   <div className='h-[100vh] w-[100vw] '>
      <div><Navbar></Navbar></div>

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
   </div>
  )
}

export default App
