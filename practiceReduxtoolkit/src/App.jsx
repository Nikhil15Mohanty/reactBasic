import { useDispatch, useSelector} from 'react-redux'

import './App.css'
import { decrementCount, incrementCount } from './features/countSlice'

function App() {

  const dispatch = useDispatch()
 
  const handleIncrement = ()=>{
      dispatch(incrementCount())
  }

  const handleDecrement = ()=>{
      dispatch(decrementCount())
  }

    const count = useSelector((state) =>state.count)

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  )
}

export default App
