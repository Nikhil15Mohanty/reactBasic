import { useState } from 'react'
import './App.css'

function App() {
  
  let [value,setValue] = useState(5);

  const incrementValue = ()=>{
    // console.log("Value added",Math.random())
    // setValue(value < 20? value+1: 20);
    setValue((prevValue)=> (prevValue < 20 ? prevValue + 1 : 20))
  }

  const decrementValue = ()=>{
    // setValue(value > 0 ? value -1 : 0);
    setValue(prevValue => prevValue > 0 ? prevValue -1 : 0)
  }
  return (
    <>
      <h1>Small Project to understand hook</h1>
      <h2>Counter value: {value}</h2>
      <button onClick={incrementValue}>Increment Value {value}</button>
      <br />
      <button onClick={decrementValue}>Decrement Value: {value}</button>
    </>
  )
}

export default App
