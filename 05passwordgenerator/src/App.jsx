import { useCallback, useEffect, useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword]=useState('')

  let passwordref=useRef(null)
  
  const generatPassword=()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(charAllowed) str+="!@#$%^&*()_+"
    if(numberAllowed) str+="0123456789"

    for(let i=1;i<=length;i++){
      const char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char)
    }

    setPassword(pass);
  }

  useEffect(()=>{
    generatPassword();
  },[length,charAllowed,numberAllowed])

  const copyToClipboard=()=>{
    window.navigator.clipboard.writeText(password)
    passwordref.current.select()
  }
  
  
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='passWord' readOnly ref={passwordref}/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyToClipboard}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>setlength(e.target.value)}/>
          <label htmlFor="length">Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}/>
          <label htmlFor="number">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={charAllowed} onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }}/>
          <label htmlFor="Character">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
