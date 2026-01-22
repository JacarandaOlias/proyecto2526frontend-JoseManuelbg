import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import MultiStepForm from './pages/MultiStepForm'
import { ToastContainer } from 'react-toastify';
import EditUser from './pages/EditUser'


function App() {

  return (
    
  <>
      <Navbar />
      <ToastContainer />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<MultiStepForm/>} />
          <Route path='/edit' element={<EditUser />} />
        </Routes>
      </div>
    </>

    
  )
}

export default App
