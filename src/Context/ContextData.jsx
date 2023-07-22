import React, { createContext, useContext, useEffect, useState } from 'react'
import { callAPI } from '../utils/CallApi'
import { useLocation } from 'react-router'

const useContextDataG = createContext()



const ContextData = ({children}) => {

    const [data,setData] = useState([])

    const fetchData = async()=>{
    const res = await fetch('Data/products.json',{headers : { 'Content-Type': 'application/json','Accept': 'application/json'}})
    const data = await res.json ()
    setData(data)
    }

   
  
  useEffect(()=>{
  fetchData()
  },[])    
     
 // const fetchproducts = async () =>{
    //   const res = await fetch('https://fakestoreapi.com/products')    
    //   const data = await res.json()
    //   setData(data)  
    //   } 
   
    
    
//     const fetchProducts  = () => {
//       callAPI(`Data/products.json`)
//       .then((data)=>{
//       setData(data)
//       })
//   }
    
// useEffect(()=>{
// fetchProducts()   
// },[])




  return (
  <useContextDataG.Provider value={[data]}>
    {children}
  </useContextDataG.Provider>
    )
}

export default ContextData

export const useContextData = () =>useContext(useContextDataG)