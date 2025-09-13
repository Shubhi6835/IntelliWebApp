import React from 'react'
import {Route, Routes } from 'react-router-dom'
import SignUp from './pages/Signup'
import Login from './pages/Login'

function App() {
  return (
   <Routes>
    <Route path='/signup' element={<SignUp/>}/>
     <Route path='/login' element={<Login/>}/>
   </Routes>
  )
}

export default App
