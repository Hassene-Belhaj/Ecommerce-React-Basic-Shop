import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const useContextDataG = createContext()



const ContextData = ({children}) => {
    const [data,setdata] = useState([])

const FetchProducts = async () => {
try {
    const res = await axios.get('https://dummyjson.com/products')
    setdata(res.data)
} catch (error) {
    console.log(error);
}
}

useEffect(()=>{
FetchProducts()    
},[])


// const FetchProducts = async () => {
// const res = await fetch('https://dummyjson.com/products')
// const data = await res.json()
// setData(data);
// }    


console.log(data);

  return (
  <useContextDataG.Provider value={[data]}>
    {children}
  </useContextDataG.Provider>
    )
}

export default ContextData

export const useContextData = () =>useContext(useContextDataG)