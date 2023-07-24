import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { callAPI } from '../utils/CallApi'
import { useLocation, useNavigate } from 'react-router'

const useContextDataG = createContext()



const ContextData = ({children}) => {

    const [data,setData] = useState([])
    const [updata,setUpdata] = useState() 
    const [category , setCategory] = useState(false)


    const fetchData = async()=>{
    const res = await fetch('Data/products.json',{headers : { 'Content-Type': 'application/json','Accept': 'application/json'}})
    const data = await res.json ()
    setData(data)
    }

   useEffect(()=>{
    fetchData()
   },[category])
    
  

  

     
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
    




  return (
  <useContextDataG.Provider value={[data,setData,category,setCategory]}>
    {children}
  </useContextDataG.Provider>
    )
}

export default ContextData

export const useContextData = () =>useContext(useContextDataG)