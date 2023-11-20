import { useEffect } from 'react'
import './App.css'
import MainSection from './components/MainSection'
import { LanguageContextProvider } from './contexts/LanguageContext'
function App() {
  
  useEffect(()=>{
    setLanguage(languages[0])
  },[])
  return (
    <LanguageContextProvider value={{languages,language,setLanguage}}>
     <MainSection/>
    </LanguageContextProvider>
  )
}

export default App
