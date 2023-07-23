import React from 'react'
import { useContextData } from '../Context/ContextData'
import styled from 'styled-components'
import { Button } from './Global'
import { useContextCart } from '../Context/ContextCart'

const Container = styled.div`
width: 100%;
height: 100%;
margin: 0 auto 4rem auto;
text-transform: capitalize;
`
const FlexDiv = styled.div`
display: flex;
width: 70%;
height: 400px;
border: solid 1px rgba(0,0,0,0.1);
margin: auto;
border-top-right-radius : 7px ;
border-top-left-radius : 7px ;
`
const LeftCol = styled.div`
width: 30%;
height: 100%;
display: flex;
img{
min-width: 100%;
min-height: 100%;
object-fit: cover;
border-top-left-radius : 7px ;
}
`

const RightCol = styled.div`
width: auto;
height: 100%;
background: #fff;
border-top-right-radius : 7px ;
padding : 2rem 4rem;
`

const ProductsList = ({product}) => {
    const {id,title,description,price,image} = product
    const [data] = useContextData()
    const {addtoCart} = useContextCart()

  return (
  <Container>
    <FlexDiv>
       <LeftCol>
         <img src={image} alt="" />
       </LeftCol>
       <RightCol>
         <h3>{title}</h3>
         <h4 style={{margin:'2rem 0'}}>${price}</h4>
          <p style={{margin :'2rem 0'}}>{description}</p>
          <Button width={'10rem'} height={'2rem'} onClick={()=>addtoCart(product,product.id)}>Add To Cart</Button>
       </RightCol>
    </FlexDiv>
  </Container>

)
}

export default ProductsList