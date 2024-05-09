import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Register from './component/Register'
import TourGuideRegister from './component/sub-component/TourGuideRegister'
import UsersRegister from './component/sub-component/UsersRegister'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register/>
    </>
  )
}

export default App
