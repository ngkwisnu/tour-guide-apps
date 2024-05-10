import { useState } from 'react'
<<<<<<< HEAD:frontend/tour-guide-fe/src/App.jsx
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
=======

import Login from './component/Login'
>>>>>>> f260f0088da1a3bd0a367b0c69ebd187e9c5494c:frontend/src/App.jsx
import Register from './component/Register'
import CreateAccount from './component/sub-component/CreateAccount'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>} />
          <Route path='/register-tour-guide' element={<TourGuideRegister/>} />
          <Route path='/register-users' element={<UsersRegister/>} />
        </Routes>
      </BrowserRouter> */}
      <CreateAccount/>
    </>
  )
}

export default App
