import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { callAPI } from '../utils/CallApi'

const useContextDataG = createContext()



const ContextData = ({children}) => {
    const [data,setData] = useState([])


    const FetchProducts  = () => {
      callAPI(`Data/products.json`)
      .then((data)=>{
      setData(data)
      })
    }
    
    
    
  
    


// const FetchProducts = async () => {
// try {
//     const res = await axios.get('/data/products.json')
//     setdata(res.data)
// } catch (error) {
//     console.log(error);
// }
// }

useEffect(()=>{
FetchProducts()    
},[])


// const FetchProducts = async () => {
// const res = await fetch('https://dummyjson.com/products')
// const data = await res.json()
// setData(data);
// }    



  return (
  <useContextDataG.Provider value={[data]}>
    {children}
  </useContextDataG.Provider>
    )
}

export default ContextData

export const useContextData = () =>useContext(useContextDataG)