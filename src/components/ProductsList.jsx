import React from 'react'
import { useContextData } from '../Context/ContextData'
import styled from 'styled-components'
import { Button } from './Global'
import { useContextCart } from '../Context/ContextCart'
import { Link } from 'react-router-dom'

const Container = styled.div`
width: 100%;
height: 100%;
margin: 0 auto 4rem auto;
text-transform: capitalize;
@media screen and (max-width : 768px){
  font-size: .7rem;
}
`
const FlexDiv = styled.div`
display: flex;
margin: auto;
width: 80%;
height: 400px;
border: solid 1px rgba(180,180,180,0.3);
border-top-right-radius : 7px ;
border-top-left-radius : 7px ;
gap: 1rem;
@media screen and (max-width : 768px){
flex-direction  :column ;
text-align: center;
}
`
const LeftCol = styled.div`
width: 30%;
height: 100%;
margin: auto;
display: flex;
img{
width: 100%;
height: 100%;
object-fit: cover;
border-top-left-radius : 7px ;
}
@media screen and (max-width : 768px){
flex-direction  :column ;
text-align: center;
}
`

const RightCol = styled.div`
width: 70%;
height: 100%;
border-top-right-radius : 7px ;
margin: auto;
padding-top:1rem ;
`

const ProductsList = ({product}) => {
    const {id,title,description,price,image} = product
    const [data] = useContextData()
    const {addtoCart} = useContextCart()

  return (
  <Container>
    <FlexDiv>
       <LeftCol>
        <Link to={`/product/${id}`}>
         <img src={image} alt="" />
        </Link>
       </LeftCol>
       <RightCol>
         <h3>{title}</h3>
         <h4 style={{margin:'2rem 0'}}>${price}</h4>
          <p style={{margin :'2rem 0'}}>{description}</p>
          <Button  width={'10rem'} height={'2rem'} onClick={()=>addtoCart(product,product.id)}>Add To Cart</Button>
       </RightCol>
    </FlexDiv>
  </Container>

)
}

export default ProductsList