import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'



const ContextCartG = createContext()

const ContextCart = ({children}) => {
  const [isopen,setIsOpen] = useState(false)
  const [cart,setCart] = useState([])
  const handleClickCart = () => setIsOpen(!isopen)


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
const productinCart = cart.filter((element)=>{
    return element.id !== id
})

}



  return (
    <ContextCartG.Provider value={{isopen,setIsOpen,handleClickCart,cart,addtoCart}}>
        {children}
    </ContextCartG.Provider>
  )
}

export default ContextCart

export const useContextCart = () => useContext(ContextCartG)