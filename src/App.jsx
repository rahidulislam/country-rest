import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/Country/Countries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Countries/>
    </>
  )
}

export default App
