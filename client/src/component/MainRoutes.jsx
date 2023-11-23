import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Employee from '../pages/Employee'
import Dashboard from '../pages/Dashboard'
import AddEmployess from '../pages/AddEmployess'
import Detials from '../pages/Detials'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/employee' element={<Employee />}/>
      <Route path='/addemp' element={<AddEmployess />}/>
      <Route path='/view' element={<Detials />}/>
      <Route path='/' element={<Dashboard />}/>
    </Routes>
  )
}

export default MainRoutes
