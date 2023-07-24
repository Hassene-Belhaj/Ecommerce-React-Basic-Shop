import { createContext, useContext, useState ,useEffect } from "react";
import { GoogleAuthProvider,onAuthStateChanged,signInWithPopup,signOut} from 'firebase/auth'
import { auth } from "../Firebase";

const ContextAuthG =  createContext()


const ContextAuth = ({children}) => {
  // const navigate = useNavigate()
  const [signin,setSignIn] = useState(false)
  const [user,setUser] =useState({})

  const handleSign = () => setSignIn(!signin)
    
  
  const googleSignIn = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth,provider)
  }

  const googleLogOut = () => {
   signOut(auth) 
  }
 
  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth , (currUser)=> {
    setUser(currUser)
    
  }) 
  return () => {
    unsubscribe() 
  }
  
  },[])

    return (
     <ContextAuthG.Provider value={{signin,setSignIn,user,onAuthStateChanged,handleSign,googleSignIn,googleLogOut}} >
       {children}  
     </ContextAuthG.Provider>
    )
}

export  default ContextAuth ;

export const  useContextAuth = () =>useContext(ContextAuthG) 