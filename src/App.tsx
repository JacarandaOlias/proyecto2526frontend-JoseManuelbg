import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import MultiStepForm from './pages/MultiStepForm'
import { ToastContainer } from 'react-toastify';
import EditUser from './pages/EditUser'
// Importa el nuevo componente (ajusta la ruta según tu carpeta)
import AdminSubjects from './pages/ManageSubjects' 

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
          
          {/* Rutas de Administración */}
          <Route path='/admin/subjects' element={<AdminSubjects />} />
        </Routes>
      </div>
    </>
  )
}

export default App