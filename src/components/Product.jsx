import React from 'react'
import styled  from 'styled-components'
import { useContextCart } from '../Context/ContextCart'


const ProductDiv = styled.div`
width: 300px;
height: 480px;
margin: auto;
display: flex;
flex-direction: column;
border-radius: 10px;
img{
    min-width: 100%;
    height :380px; 
    object-fit: cover;
    border-radius: 10px;
}
h3{
  font-size: .9rem;
  margin-top: 1rem;
  text-transform: capitalize;
}
p{
  font-weight: 600;
}
button{
  padding:.5rem;
  background: transparent;
  border: none;
  border-radius: 5px;
  color: ${({theme})=>theme.color};
  font-weight: 800;
  &:hover{
background :rgba(108, 122, 137,0.1);
transition:all 0.3s ease-in-out;  
}
}
`



const Product = ({product}) => {
  const {cart,addtoCart} = useContextCart() 
  const {id,title,description,image,price,category} = product
  return (
    <ProductDiv>
      <img src={image} alt="" />
       <h3>{title}</h3>
       <button  onClick={()=>addtoCart(product,id)}>${price.toFixed(2)}</button>
     </ProductDiv>
  )
}

export default Product