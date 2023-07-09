import { createContext, useContext, useState } from "react";

const ContextAuthG =  createContext()


const ContextAuth = ({children}) => {
    const [signin,setSignIn] = useState(false)
    const handleSign = () => setSignIn(!signin)

    return (
     <ContextAuthG.Provider value={{signin,setSignIn,handleSign}} >
       {children}
     </ContextAuthG.Provider>
    )
}

export  default ContextAuth ;

export const  useContextAuth = () =>useContext(ContextAuthG) 