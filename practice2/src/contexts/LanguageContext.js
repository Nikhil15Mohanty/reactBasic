import React,{createContext,useContext} from 'react'

    const languages = ['python','javascript']
export const LanguageContext = createContext({
    languages,
    language: languages[0],
    setLanguage: () =>{}
})

export const LanguageContextProvider = LanguageContext.Provider

export default function useLanguage(){
    return useContext(LanguageContext)
}