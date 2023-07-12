import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useContextData } from '../../Context/ContextData'
import styled from 'styled-components'
import ProductCarousel from './ProductCarousel'



const Container = styled.div`
width: 90%;
height: 90vh;
display: flex;
justify-content: center;
margin-top: 1rem;
margin-bottom: 4rem;
margin-left: auto;
margin-right: auto;
text-transform: capitalize;
@media screen and (max-width : 768px) {
  display: block;
  width: 100%;
  height: 100%;
}
`

const RightCol = styled.div`
width: 40%;
height: 100%;
padding: 1rem;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
@media screen and (max-width : 768px) {
  display: block;
  width: 100%;
  height: 100%;
}
`
const LeftCol = styled.div`
width: 60%;
height: 100%;
@media screen and (max-width : 768px) {
  display: block;
  width: 100%;
  height: 100%;
}

`

const ProductPage = () => {
    const [data] = useContextData()
    const {id} = useParams()
    


    const product = data?.find((item)=>item.id === parseInt(id))

  

  return (
    <Container>
      <LeftCol>
        <ProductCarousel product={product} id={id}/>
      </LeftCol>
      <RightCol>
        <h3>{product?.title}</h3>
      </RightCol> 
    </Container>

  )
}

export default ProductPage

