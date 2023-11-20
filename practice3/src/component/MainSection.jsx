import React,{useContext, useState} from 'react'
import countContext from '../context/countContext'

const MainSection = ()=>{

    const {count,setCount} = useContext(countContext)

    const handleBtn = ()=>{
        setCount((count)=>count + 1)
    }
    return(
        <>
        <p>Count:{count}</p>
        <button onClick={handleBtn}>Click</button>
        </>
    )
}

export default MainSection