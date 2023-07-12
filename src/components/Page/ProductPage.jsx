import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useContextData } from '../../Context/ContextData'
import styled from 'styled-components'
import ProductCarousel from './ProductCarousel'



const Container = styled.div`
width: 90%;
height: 100vh;
display: flex;
justify-content: center;
margin-top: 2rem;
margin-bottom: 4rem;
margin-left: auto;
margin-right: auto;
text-transform: capitalize;
`

const RightCol = styled.div`
width: 60%;
height: 100%;
padding: 1rem;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
`

const LeftCol = styled.div`
width: 40%;
height: 100%;
`

const ProductPage = () => {
    const [data] = useContextData()
    const {id} = useParams()
    


    const product = data.find((item)=>item.id === parseInt(id))

  

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

