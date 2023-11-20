import './App.css'
import MainSection from './component/MainSection'
import CounContexProvider from './context/CountContextProvider'

function App() {
 
  return (
    <>
      <CounContexProvider>
        <MainSection/>
      </CounContexProvider>
    </>
  )
}

export default App
