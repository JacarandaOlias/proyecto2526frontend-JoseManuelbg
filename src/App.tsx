import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import MultiStepForm from './pages/MultiStepForm'


function App() {

  return (
    
  <>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<MultiStepForm/>} />
        </Routes>
      </div>
    </>

    
  )
}

export default App
