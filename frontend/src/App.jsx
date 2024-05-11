import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
