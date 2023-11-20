import React,{useState} from 'react';
import countContext from './countContext';

const CounContexProvider = ({children})=>{

    const [count,setCount] = useState(0)

    return(
        <countContext.Provider value={{count,setCount}}>
            {children}
        </countContext.Provider>
    )
}

export default CounContexProvider