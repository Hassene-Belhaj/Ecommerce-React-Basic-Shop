import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'


const useContextDataG = createContext()



const ContextData = ({children}) => {

    const [data,setData] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
    const res = await fetch('Data/products.json',{headers : { 'Content-Type': 'application/json','Accept': 'application/json'}})
    const data = await res.json ()
    setData(data)
    }
  
    fetchData()    

   },[])
    
  

  

     





  return (
  <useContextDataG.Provider value={[data,setData]}>
    {children}
  </useContextDataG.Provider>
    )
}

export default ContextData

export const useContextData = () =>useContext(useContextDataG)