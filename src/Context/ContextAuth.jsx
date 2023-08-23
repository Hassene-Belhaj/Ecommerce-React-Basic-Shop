import { createContext, useContext, useState ,useEffect } from "react";
import { GoogleAuthProvider,onAuthStateChanged,signInWithPopup,signOut} from 'firebase/auth'
import { Provider, auth } from "../Firebase";
import { useNavigate } from "react-router";

const ContextAuthG =  createContext()


const ContextAuth = ({children}) => {
  
  const [signin,setSignIn] = useState(false)
  const [succes , setSucces] = useState(false)
  const [user,setUser] =useState(null)
  
  const navigate = useNavigate()
  
  
  const googlesignIn = async () => {
  try {
    await signInWithPopup(auth , Provider)
    setSucces(true)
    console.log(user)
    navigate('/')
  } catch (error) {
    console.log(error.code);
  }
}

const logOut= async() => {
  try {
    await signOut(auth) 
    setSucces(false)
    navigate('/')
 } catch (error) {
  console.log(error.code);
 }
  }
 
  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth , (currUser)=> {
    setUser(currUser)  
    console.log(user);  
  }) 
  return () => unsubscribe() 
  },[])

 
    
    return (
     <ContextAuthG.Provider value={{signin,setSignIn,user,setUser,googlesignIn,logOut,succes}} >
       {children}  
     </ContextAuthG.Provider>
    )
}

export  default ContextAuth ;

export const  useContextAuth = () =>useContext(ContextAuthG) 