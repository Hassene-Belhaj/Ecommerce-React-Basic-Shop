import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { callAPI } from '../utils/CallApi'

const useContextDataG = createContext()



const ContextData = ({children}) => {
    const [data,setData] = useState([])
    

    const FetchProducts  = () => {
      callAPI(`/Data/products.json`)
      .then((data)=>{
      setData(data)
      })
    }
    
useEffect(()=>{
FetchProducts()   
},[])
    
    


  return (
  <useContextDataG.Provider value={[data]}>
    {children}
  </useContextDataG.Provider>
    )
}

export default ContextData

export const useContextData = () =>useContext(useContextDataG)