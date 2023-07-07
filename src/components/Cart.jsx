import React from 'react'
import { useState } from 'react'
import { styled } from 'styled-components'
import { useContextCart } from '../Context/ContextCart'
import { AiOutlineClose } from 'react-icons/ai'
import ProductCart from './ProductCart'

const Container = styled.div`
position: fixed;
top: 0;
right:${({$isopen})=>$isopen ? '-100%' : 0};
transition: all 0.5s ease-in-out;
bottom: 0;
width: 30%;
height: 100%;
gap: 1rem;
background:${({theme})=>theme.background};
z-index: 10000;
box-shadow: 1px 1px 5px ${({theme})=>theme.color};

@media screen and (max-width : 768px){
    width: 60%;
    height: 100%;
}



@media screen and (max-width : 440px){
    width: 100%;
    height: 100%;
}
overflow: scroll;
`
const Headline = styled.div`
margin: 1.2rem auto;
width: 95%;
height: auto;
display: flex;
justify-content: space-between;
align-items: center;
h2{
    font-size: 1rem;
}
`
const FlexCart = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
background: indigo;
gap: 1rem;
`

const CartDiv = styled.div`
width: 100%;
min-height: 250px;
background:yellow;
`

const Cart = () => {
    const {isopen,cart,handleClickCart} = useContextCart()

  return (
    <Container $isopen={isopen}>
      <Headline>   
         <h2>cart</h2>
        <AiOutlineClose onClick={handleClickCart} onMouseEnter={handleClickCart} size={20} />
       </Headline>
       <FlexCart  >
        {cart.map((product,index)=>{
            return (
                <CartDiv>
                    <ProductCart product={product} key={index}/>
                </CartDiv>
                )
            })}
        </FlexCart> 
        
    </Container> 
  )
}

export default Cart