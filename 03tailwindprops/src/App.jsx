import './App.css'
import Card from './Components/Card'

let person={
  name:'Dhruv',
  age:20,
  address:{
    city:'Surat',
    state:'Gujarat',
    country:'India'
  }
}
let person1={
  name:'Charkhawala',
  age:25,
  address:{
    city:'Gandhinagar',
    state:'Gujarat',
    country:'India'
  }
}

function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite With Tailwind</h1>
      <Card user={person}/>
      <Card user={person1}/>
    </>
  )
}

export default App
