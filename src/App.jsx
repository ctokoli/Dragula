/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SignIn from './components/Signin'
import Signup from './components/Signup'
import Dashboard from './components/dashboard'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
