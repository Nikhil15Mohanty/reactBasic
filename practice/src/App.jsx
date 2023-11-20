
import './App.css'
import MainSection from './components/MainSection'
import LanguageContextProvider from './context/LanguageContextProvider'

function App() {
 

  return (
    <>
    <LanguageContextProvider>
      <MainSection/>
    </LanguageContextProvider>
    </>
  )
}

export default App
