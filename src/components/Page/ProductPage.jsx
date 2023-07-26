import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { useContextData } from '../../Context/ContextData'
import styled from 'styled-components'
import ProductCarousel from './ProductCarousel'
import { useContextCart } from '../../Context/ContextCart'
import AvgRating from '../AvgRating'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { motion } from 'framer-motion'


const Container = styled.div`
width: 90%;
height: 80vh;
display: flex;
justify-content: center;
margin: 8rem auto 8rem auto;
text-transform: capitalize;
@media screen and (max-width : 768px) {
  display: block;
  width: 100%;
  height: 100%;
  margin-bottom:0 ;
}
`

const RightCol = styled.div`
width: 45%;
height: 100%;
display: flex;
flex-direction: column;
margin: 2rem auto;
padding:2rem 0 0 1rem ;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
@media screen and (max-width : 768px) {
  display: block;
  width: 100%;
  height: 100%;
}
h3{
  font-size: 20px;
}

`
const Button = styled.button`
display: ${({display})=>display};
font-weight:700 ;
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
width: 100%;
height:100%;
margin-top:2rem;
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
margin: 1rem 0;
`

const FlexDescription = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: start;
h4{
margin-bottom:.5rem;
cursor:pointer;
transition: all 0.3s ease-in-out;
&:hover{
  text-decoration: underline;
  text-underline-offset: .5rem;
  transition: all 0.3s ease-in-out;
}

}
`
const DescriptionBlock = styled.div`
width: 100%;
height: auto;
border-top: 1px solid rgba(180,180,180,0.5);
border-bottom: 1px solid rgba(180,180,180,0.5);
padding-bottom: 1.5rem;
padding-top: 1.5rem;
@media screen and (max-width : 768px){
  margin-bottom: 10rem;
}
`
const Span = styled(motion.span)`
width: 100%;
margin: 1rem 0 1rem 0;
transition: all .3s ease-in-out;
`
const ChevronIcon = styled(BiChevronDown)`
transform:${({show})=>show? 'rotate(180deg)' : ''} ;
transition: all 0.3s ease-in-out;

`

const ProductPage = () => {
    const {id} = useParams()
    const [data] = useContextData()
    const {addtoCart,cart,decreaseQuantity,increaseQuantity} = useContextCart()
    const [show,setShow] = useState(false)

    const location = useLocation();
    const product = data.find((item)=>item.id === parseInt(id))
    const productinCart = cart.find((item)=>item.id === parseInt(id))
    
    
    if (!product?.title) return ( <h4 style={{textAlign:'center',margin:'2rem auto',textTransform:'capitalize'}}>loading page...</h4> )

  return (
    <Container>
      <LeftCol>
        <span>
      <h4 style={{margin:'1rem'}}>
         <span>{product.category}</span>{location.pathname}
      </h4>
        </span>
        <ProductCarousel product={product} id={id}/>
      </LeftCol>
      <RightCol>
        <h3>{product?.title}</h3>
         <AvgRating  product={product}/>
        <span style={{fontWeight:'700'}}>${product.price}</span>
      <QuantityDiv>
          {productinCart ? <DisplayHideDiv>
          <h4>Quantity</h4>         
        <FlexDiv>
          <button style={{background:'#fff',border:'1px solid #f3f5f9',padding:'.8rem',borderRadius:'7px',fontWeight:'800'}}> 
          {productinCart.quantity} </button>            
        <ChevronDiv>
          <Button width={'1.5rem'} raduis={'5px'} height={'1.5rem'}  onClick={()=>increaseQuantity(product.id)} ><BiChevronUp size={20} /></Button>
          <Button width={'1.5rem'} raduis={'5px'} height={'1.5rem'} onClick={()=>decreaseQuantity(product.id)}  ><BiChevronDown size={20}/></Button>

          </ChevronDiv>  
            </FlexDiv> 
        </DisplayHideDiv> : ''}
      
         <Button width={'10rem'} height={'2rem'} margin={'4rem 0'} radius={'5px'} onClick={()=>addtoCart(product,product.id)}>Add To Cart</Button> 
        
        <DescriptionBlock>
            <FlexDescription>
                  <h4 onClick={()=>setShow(!show)}>Description</h4>
                <ChevronIcon show={show? 1 :0} onClick={()=>setShow(!show)} size={20} style={{cursor:'pointer'}}/> 
            </FlexDescription>
        
                <Span 
                    variants={{
                      hidden : {display : 'none' , opacity : 0 } ,
                      visible : {display : 'inline-block' , opacity : 1 },
                    }}
                    animate={show? 'visible' : 'hidden'} 
                    exit={'hidden'}
                    transition={{
                      delay: 0.2
                    }}
                >
                    <p>{product?.description}</p> 
                </Span>
          
        </DescriptionBlock>
                    
     
      
      </QuantityDiv>
         
      </RightCol> 

    </Container>

  )
}

export default ProductPage

