import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useContextData } from '../../Context/ContextData'
import styled from 'styled-components'
import ProductCarousel from './ProductCarousel'
import { useContextCart } from '../../Context/ContextCart'



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
display: flex;
flex-direction: column;
padding: 1rem;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
@media screen and (max-width : 768px) {
  display: block;
  width: 100%;
  height: 100%;
}
h3{
  font-size: 20px;
  text-align: center;
  margin: 1rem auto;
}
p{
  padding-top: 5rem;
}
button{
  margin: 20rem 0;
  padding: 1rem;
  width: 30%;
  border-radius: 10px;
  border:.5px solid;
  background: ${({theme})=>theme.color};
  color:${({theme})=>theme.background};
  font-size: .9rem;
  font-weight: 700;
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
    const {id} = useParams()
    const [data] = useContextData()
    const {addtoCart,cart} = useContextCart()

  console.log(cart);



    const product = data.find((item)=>item.id === parseInt(id))

    
     
    
    if (!product?.title) return ( <h4 style={{textAlign:'center',margin:'2rem auto',textTransform:'capitalize'}}>loading page...</h4> )

  return (
    <Container>
      <LeftCol>
        <ProductCarousel product={product} id={id}/>
      </LeftCol>
      <RightCol>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
         <button onClick={()=>addtoCart(product,product?.id)}>Add To Cart</button>
      </RightCol> 

    </Container>

  )
}

export default ProductPage

