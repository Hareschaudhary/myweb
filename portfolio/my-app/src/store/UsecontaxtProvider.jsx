import React, { useState } from 'react'
import Usecontaxt from './Usecontaxt'

const UsecontaxtProvider =({children})=>{
    let [switc,setswitc]=useState(true)
    return(
        <Usecontaxt.Provider value={{switc,setswitc}}>
            {children}
        </Usecontaxt.Provider>
    )
};
export default UsecontaxtProvider