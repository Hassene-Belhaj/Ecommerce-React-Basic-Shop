import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'



const ContextCartG = createContext()

const ContextCart = ({children}) => {
  const [isopen,setIsOpen] = useState(false)
  const handleClickCart = () => setIsOpen(!isopen)



  return (
    <ContextCartG.Provider value={{isopen,setIsOpen,handleClickCart}}>
        {children}
    </ContextCartG.Provider>
  )
}

export default ContextCart

export const useContextCart = () => useContext(ContextCartG)