import React from 'react'
import { useParams } from 'react-router'
import { useContextData } from '../../Context/ContextData'

const ProductPage = () => {
    const [data] = useContextData()
    const {id} = useParams()
    console.log(data);


const product = data?.find((item)=>item.id === parseInt(id))    

  return (
    <div>
    
    </div>
  )
}

export default ProductPage