import React from 'react'
import { useState } from 'react'
import { styled } from 'styled-components'
import { useContextCart } from '../Context/ContextCart'
import { AiOutlineClose } from 'react-icons/ai'

const Container = styled.div`
position: fixed;
top: 0;
right:${({$isopen})=>$isopen ? '-100%' : 0};
transition: all 0.3s ease-in-out;
bottom: 0;
width: 30%;
height: 100%;
background:${({theme})=>theme.background};
z-index: 10000;
box-shadow: 1px 1px 5px ${({theme})=>theme.color};
@media screen and (max-width : 768px){
    width: 60%;
    height: 100%;
}
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

const Cart = () => {
    const {isopen,handleClickCart} = useContextCart()
  return (
    <Container $isopen={isopen}>
      <Headline>   
         <h2>cart</h2>
        <AiOutlineClose onClick={handleClickCart} size={20} />
       </Headline>
    </Container> 
  )
}

export default Cart