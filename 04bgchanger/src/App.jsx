import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState('olive')
  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-500' onClick={()=> setColor('red')}>red</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-blue-500' onClick={()=>setColor('blue')}>blue</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-green-500' onClick={()=>setColor('green')}>green</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-orange-500' onClick={()=>setColor('orange')}>orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
