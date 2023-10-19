import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container">
      <div id="navbar">{/* navigation here */}</div>
      <div id="main-section">
        <Routes>
          <Route path = '/blue'  element= { <h1 className='blue'>blue</h1>}/> 
          <Route path = '/red' element = { <h1 className='red'>red</h1>} /> 
        </Routes>
      </div>
    </div>
  )
}

export default App