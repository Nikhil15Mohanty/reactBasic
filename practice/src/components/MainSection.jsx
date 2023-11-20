import React,{useContext} from 'react'
import LanguageContext from '../context/LanguageContext'
const MainSection = () => {

    const {languages,language,setLanguage} = useContext(LanguageContext)

    const currIndex = languages.indexOf(language);
    
    const toggleChange = ()=>{
        if(currIndex === languages.legnth-1){
            setLanguage(languages[0])
        }else {
            setLanguage(languages[currIndex+1])
        }
    }
  return (
    <div>
        <p>Your favourite language is {`${language}`}</p>
        <button onClick={toggleChange}>Toggle</button>
    </div>
  )
}

export default MainSection