import { createContext, useContext, useState } from "react";
import { GoogleAuthProvider , signInWithPopup } from 'firebase/auth'

const ContextAuthG =  createContext()


const ContextAuth = ({children}) => {

  const [signin,setSignIn] = useState(false)
  const handleSign = () => setSignIn(!signin)
    
  
  const GoogleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth,provider)

  }


  const Value = {
    signin,setSignIn,handleSign,GoogleSignIn
  }

    return (
     <ContextAuthG.Provider value={Value} >
       {children}
     </ContextAuthG.Provider>
    )
}

export  default ContextAuth ;

export const  useContextAuth = () =>useContext(ContextAuthG) 