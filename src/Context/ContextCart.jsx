import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'



const ContextCartG = createContext()

const ContextCart = ({children}) => {
  const [isopen,setIsOpen] = useState(false)
  const [cart,setCart] = useState([])
  const [bag,setBag] = useState([])
  const [total,setTotal] = useState()
  const handleClickCart = () => setIsOpen(!isopen)

 
useEffect(()=>{
if(cart.length === 0){
  setIsOpen(false)
}
},[cart.length])  


useEffect(()=>{
const sum = cart.reduce((accu,curr)=>{
   return accu + curr.price * curr.quantity
},0)

setTotal(sum.toFixed(2))
},[cart])


useEffect(()=>{
const quantity = cart.reduce((accu,curr)=>{
    return accu + curr.quantity
},0)
setBag(quantity)

},[cart])





const addtoCart = (product,id) => {
const initialQuantity = {...product , quantity : 1}
const productinCart = cart.find((element)=>element.id === id)
if(productinCart) {
  const newCart = cart.map((element)=>{
    if(element.id === id){
        return {...element,quantity : element.quantity + 1}
    } else {
        return element
    }
  })  
     setCart(newCart)
} else {

    setCart([...cart,initialQuantity])  

}

}

const deleteProduct = (id) => {
const productinCart = cart.filter((element)=>element.id !== id)
setCart(productinCart)
}

const deleteCart = () => {
setIsOpen(!isopen)    
setCart([])
}

const decreaseQuantity = (id) => {
const productinCart = cart.find((element)=>element.id ===id)
if (productinCart){
   const newCart = cart.map((element)=>{
    if(element.id === id){
        return {...element,quantity : element.quantity - 1}
    } else {
        return element
    }
   })  
   setCart(newCart)
} if(productinCart.quantity < 2 ){
    deleteProduct(id)
  }      
}

const increaseQuantity = (id) => {
const productinCart = cart.find((element)=>element.id === id)  
addtoCart(productinCart,id)
}

  return (
    <ContextCartG.Provider value={{isopen,setIsOpen,handleClickCart,cart,addtoCart,deleteProduct,deleteCart,bag,decreaseQuantity,increaseQuantity,
    total}}>
        {children}
    </ContextCartG.Provider>
  )
}

export default ContextCart

export const useContextCart = () => useContext(ContextCartG)