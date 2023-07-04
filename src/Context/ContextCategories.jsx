import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'



const ContextCategoriesG = createContext()


const ContextCategories = ({children}) => {
const [cat,setCat] = useState([])


const FetchCat = async () => {
    try {
    const res = await axios.get('https://dummyjson.com/products/categories')
    setCat(res.data)        
    } catch (error) {
        console.log(error);
    }
}




useEffect(()=>{
FetchCat()
},[])

console.log(cat);

  return (
   <ContextCategoriesG.Provider value={{cat}}>
       {children}
   </ContextCategoriesG.Provider>
    )
}

export default ContextCategories

export const useContextCategories = () => useContext(ContextCategoriesG)