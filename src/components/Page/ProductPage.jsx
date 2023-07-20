import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { useContextData } from '../../Context/ContextData'
import styled from 'styled-components'
import ProductCarousel from './ProductCarousel'
import { useContextCart } from '../../Context/ContextCart'
import AvgRating from '../AvgRating'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'



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
`
const Button = styled.button`
display: ${({display})=>display};
width: ${({width})=>width};
height: ${({height})=>height};
padding-left: ${({paddingLeft})=>paddingLeft};
padding-right: ${({paddingRight})=>paddingRight};
margin: ${({margin})=>margin};
background: ${({theme})=>theme.color};
color: ${({theme})=>theme.background};
border: solid 1px rgba(180,180,180,0.5);
border-radius: ${({radius})=>radius};
transition: all 0.15s ease-in-out;

cursor: pointer;
&:hover{
  opacity: 0.88;
  transition: all 0.15s ease-in-out; 
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
const QuantityDiv = styled.div`
justify-content: center;
align-items: center;
width: 100%;
height:100%;
h3{
  margin-top:3rem ;
  text-align: left;
  font-size: 1rem;
}
`
const DisplayHideDiv = styled.div`
`
const FlexDiv = styled.div`
display: flex;
justify-content: start;
align-items: center;
span{
  display: inline-block;
  font-weight: 700;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height:auto;
  margin: 1rem 1rem;
}
`


const ChevronDiv = styled.div`
width: 4rem;
height: 4rem ;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


const ProductPage = () => {
    const {id} = useParams()
    const [data] = useContextData()
    const {addtoCart,setCart,cart,decreaseQuantity,increaseQuantity} = useContextCart()

    const location = useLocation();


    const product = data.find((item)=>item.id === parseInt(id))
    const productinCart = cart.find((item)=>item.id === parseInt(id))
    

    
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

      <QuantityDiv>
          {productinCart ?   <DisplayHideDiv>
          <h3>Quantity</h3>         
            <FlexDiv>
              <span>
    
                    {productinCart.quantity}  

              </span>
            
          <ChevronDiv>
            <Button width={'1.5rem'} raduis={'5px'} height={'1.5rem'}  onClick={()=>increaseQuantity(product.id)} ><BiChevronUp size={20} /></Button>
            <Button width={'1.5rem'} raduis={'5px'} height={'1.5rem'} onClick={()=>decreaseQuantity(product.id)}  ><BiChevronDown size={20}/></Button>

          </ChevronDiv>  
            </FlexDiv> 
        </DisplayHideDiv> : ''}
      
  
  
         
         <Button width={'10rem'} height={'2rem'} margin={'4rem 0'} radius={'5px'} onClick={()=>addtoCart(product,product.id)}>Add To Cart</Button> 
         {/* <Button width={'10rem'} height={'2rem'} margin={'4rem 0'} radius={'5px'} onClick={()=>addtoCart(product,product.id)}>Add To Cart</Button>  */}
      </QuantityDiv>
         {/* <Button width={'10rem'} height={'2rem'}  onClick={()=>addtoCart(product,product?.id)}>Add To Cart</Button> */}
      </RightCol> 

    </Container>

  )
}

export default ProductPage

