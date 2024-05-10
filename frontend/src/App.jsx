import { useState } from 'react'

import Login from './component/Login'
import Register from './component/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register/>
    </>
  )
}

export default App
