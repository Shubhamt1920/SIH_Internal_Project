import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Main from './components/Main'
import Desc from './components/Desc'
import Buttons from './components/Buttons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Main/>
      <Desc/>
      <Buttons/>
    </>
  )
}

export default App
