import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import styled  from 'styled-components'
import { useContextCart } from '../Context/ContextCart'
import { AiOutlineClose } from 'react-icons/ai'
import ProductCart from './ProductCart'
import { BsTrash3 } from 'react-icons/bs'
import { motion ,useScroll } from 'framer-motion'

const Container = styled.div`
position: fixed;
top: 0;
right:${({$isopen})=>$isopen ?  0 : '-100%'};
transition: all 0.5s ease-in-out;
bottom: 0;
width: 30%;
height: 85%;
gap: 1rem;
background:${({theme})=>theme.background};
z-index: 10000;
box-shadow: 1px 1px 5px ${({theme})=>theme.color};
@media screen and (max-width : 768px){
    width: 60%;
}

@media screen and (max-width : 440px){
    width: 100%;
}
overflow: scroll;
`

const Barprogress = styled(motion.span)`
position: absolute;
inset: 0;
width: 1rem;
height: 8px;
background: red;
`

const Bottom = styled.div`
position: fixed;
bottom: 0;
width: 30%;
height: 15%;
background: ${({theme})=>theme.background};
@media screen and (max-width : 768px){
    width: 60%;
}
@media screen and (max-width : 440px){
    width: 100%;
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
    font-weight:800;
}
`
const FlexCart = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
gap: 1rem;
`

const CartDiv = styled.div`
width: 100%;
height: 250px;
`
const CleanCart = styled.span`
height: auto;
width: auto;
color: ${({theme})=>theme.color};
button{
    cursor: pointer;
    border: none;
    background: transparent;
    padding: 6px;
    border-radius: 5px;
&:hover{
background :rgba(108, 122, 137,0.2);
transition:all 0.3s ease-in-out;  
}
}
`
const IconTrash = styled(BsTrash3)`
fill:${({theme})=>theme.color};
`


const BottomDiv = styled.div`
width: 100%;
height: 2rem;
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem ;
`
const Checkout = styled.div`
width: 100%;
margin-top: 1rem;
height: auto;
display: flex;
button{
    cursor: pointer;
    margin: auto;
    width: 90%;
    height: 2rem;
    border: none;
    border-radius: 7px;
    font-weight: 800;
    background: ${({theme})=>theme.color};
    color: ${({theme})=>theme.background};
    &:hover{
     opacity:0.9;
     transition:all 0.3s ease-in-out;  
}
}
`
const Cart = () => {
    const {isopen,cart,handleClickCart,deleteCart,total} = useContextCart()

    const { scrollYProgress } = useScroll();
      const ref = useRef(null)



    // scroll to new added product in cart

    const bottomdiv = useRef(null)

    const scrollToBottom = () => {
        bottomdiv.current?.scrollIntoView({behavior: "smooth", block: "start", inline: "end"});
      }
    
      useEffect(() => {
        scrollToBottom()
      }, [cart]);

 
  return (
    <Container $isopen={isopen} >
        {/* <Barprogress  style={{scaleX : scrollYProgress}}></Barprogress> */}
      <Headline>   
         <h2>SHOPPING BAG</h2>
        <AiOutlineClose onClick={handleClickCart} onMouseEnter={handleClickCart} size={20} />
       </Headline>
       <FlexCart  >
        {cart.map((product,index)=>{
            return (

                <CartDiv key={index} ref={bottomdiv} >
                    <motion.div  
                    initial={{opacity : 0 , x : 400}}
                    animate={{opacity : 1 , x : 0}}
                    transition={{
                        duration : 0.2 ,
                        type : 'spring' ,
                        bounce : 0.2
                    }}>
                        <ProductCart  product={product} />

                    </motion.div>
                </CartDiv>
                )
            })}
        </FlexCart> 
       <Bottom>
          <BottomDiv>
                    <h4>Total : $ {total}</h4>
                    <CleanCart>
                         <button><IconTrash onClick={deleteCart}  size={25} /></button>   
                </CleanCart>

          </BottomDiv>
          <Checkout>
            <button>Checkout</button>
          </Checkout>
        </Bottom> 
    </Container> 
  )
}

export default Cart