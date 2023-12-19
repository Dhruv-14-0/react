import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0);

  return (
    <>
      <h1>Counter Project</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={()=>{
        setCounter(counter+1);
      }}> Add Value</button>
      <button onClick={()=>{
        setCounter(counter-1);
      }}>remove value</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
