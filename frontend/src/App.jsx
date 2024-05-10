import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register'

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
      {/* <CreateAccount/> */}
      <Register/>
    </>
  )
}

export default App
