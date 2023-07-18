import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { useContextData } from '../../Context/ContextData'
import styled from 'styled-components'
import ProductCarousel from './ProductCarousel'
import { useContextCart } from '../../Context/ContextCart'
import AvgRating from '../AvgRating'



const Container = styled.div`
width: 90%;
height: 80vh;
display: flex;
justify-content: center;
margin-top: 1rem;
margin-bottom: 6rem;
margin-left: auto;
margin-right: auto;
text-transform: capitalize;
@media screen and (max-width : 768px) {
  display: block;
  width: 100%;
  height: 100%;
  margin-bottom:0 ;
}
`

const RightCol = styled.div`
width: 35%;
height: 100%;
display: flex;
flex-direction: column;
margin: auto;
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
width: 45%;
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

    const location = useLocation();
    console.log('pathname', location.pathname);


    const product = data.find((item)=>item.id === parseInt(id))

    console.log(id);
     
    
    if (!product?.title) return ( <h4 style={{textAlign:'center',margin:'2rem auto',textTransform:'capitalize'}}>loading page...</h4> )

  return (
    <Container>
      <LeftCol>
      <h4 style={{marginBottom:'1rem'}}>{location.pathname}</h4>
        <ProductCarousel product={product} id={id}/>
      </LeftCol>
      <RightCol>
        <h3>{product.title}</h3>
         <AvgRating  product={product}/>
        <p>{product.description}</p>
    
         <button onClick={()=>addtoCart(product,product?.id)}>Add To Cart</button>
      </RightCol> 

    </Container>

  )
}

export default ProductPage

