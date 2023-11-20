import React,{useState} from 'react'
import LanguageContext from './LanguageContext'

const LanguageContextProvider = ({children}) => {

    const languages = ['python','js']
    const [language,setLanguage] = useState(languages[0])

  return (
    <LanguageContext.Provider value={{language,languages,setLanguage}}>
        {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider

