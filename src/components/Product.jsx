import React from 'react'
import { styled } from 'styled-components'


const ProductDiv = styled.div`
width: 300px;
height: 400px;
margin: auto;
display: flex;
border-radius: 10px;

img{
    min-width: 100%;
    min-height :100%; 
    object-fit: cover;
    border-radius: 10px;
}
`



const Product = ({product}) => {
  const {id,title,description,image} = product
  return (
    <ProductDiv>
      <img src={image} alt="" />
    </ProductDiv>
  )
}

export default Product