import { useState } from 'react';
import './App.css'

function App() {
  const [counter,setCounter] = useState(1)
  // var counter=0;
  const addValue=()=>{
    setCounter(counter+1)
  }

  const removeValue=()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Counter Project</h1>
      <button onClick={removeValue}>-</button>{"   "}
      <button >{counter}</button>{"   "}
      <button onClick={addValue}>+</button>

    </>
  )
}

export default App
