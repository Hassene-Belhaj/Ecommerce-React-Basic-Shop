import { createContext, useContext, useState } from "react";
import { GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { auth } from "../Firebase";

const ContextAuthG =  createContext()


const ContextAuth = ({children}) => {

  const [signin,setSignIn] = useState(false)
  const handleSign = () => setSignIn(!signin)
  
  
  const googleSignIn = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth,provider)
  }

    
    return (
     <ContextAuthG.Provider value={{signin,setSignIn,handleSign,googleSignIn}} >
       {children}  
     </ContextAuthG.Provider>
    )
}

export  default ContextAuth ;

export const  useContextAuth = () =>useContext(ContextAuthG) 