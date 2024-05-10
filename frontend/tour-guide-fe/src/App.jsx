import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
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
