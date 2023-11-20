import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObject = {
    name:"Hello World",
    age: 21
  }
  return (
    <>
      <h1 className='bg-blue-700 text-black p-4 rounded-lg mb-4'>Nikhil Mohanty</h1>
      <Card username="Nikhil"/>
      <Card username="Sambit"/>
    </>
  )
}

export default App
