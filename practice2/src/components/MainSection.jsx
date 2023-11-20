import React from 'react'
import useLanguage from '../contexts/LanguageContext'

const MainSection = () => {
    const {languages,language,setLanguage}=useLanguage()

    let currIndex = languages.indexOf(language)

    const toggleBtn = ()=>{
        
        if(currIndex === languages.length-1){
            setLanguage(languages[0])
          
        }else{
            setLanguage(languages[currIndex+1]) 
        }
    }
   
  return (
    <div>
        <p>Your best programming language is {`${language}`}</p>
        <button onClick={toggleBtn}>ON click</button>
    </div>
  )
}

export default MainSection