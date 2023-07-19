import React, { createContext, useContext, useEffect, useState } from 'react'
import { callAPI } from '../utils/CallApi'

const useContextDataG = createContext()



const ContextData = ({children}) => {
    const [data,setData] = useState([])
    
    const FetchProducts  = () => {
      callAPI(`Data/products.json`)
      .then((data)=>{
      setData(data.map((item)=>{
        return {...item,quantity : 0}
      }))
      })
    }
    
useEffect(()=>{
FetchProducts()   
},[])
    
const increaseQuantityData = (id) => {
const productindata = data.find((item)=>item.id === id)
if(productindata) {
  const newdataQuantity = data.map((item)=>{
    if(item.id === id) {
      return {...item , quantity : item.quantity + 1}
    } else {
      return item
    }
  })
  setData(newdataQuantity)
} else {
  setData([...data])
}
} 


const decreaseQuantityData = (id) => {
  const productindata = data.find((item)=>item.id === id)
  if(productindata) {
    const newdataQuantity = data.map((item)=>{
      if(item.id === id) {
        return {...item , quantity : item.quantity - 1}
      } else {
        return item
      }
    })
    setData(newdataQuantity)
  } else {
    setData([...data])
  }
  } 


  return (
  <useContextDataG.Provider value={[data,increaseQuantityData,decreaseQuantityData]}>
    {children}
  </useContextDataG.Provider>
    )
}

export default ContextData

export const useContextData = () =>useContext(useContextDataG)