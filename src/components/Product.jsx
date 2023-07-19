import React from 'react'
import styled  from 'styled-components'
import { useContextCart } from '../Context/ContextCart'
import { Link } from 'react-router-dom'
import { useContextData } from '../Context/ContextData'


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
  font-size: 1rem;
  &:hover{
  background: rgba(180,180,180,0.2);
  transition:all 0.3s ease-in-out;  
}
cursor: pointer;
}
`
const PriceFlex =styled.div`
width: 50%;
margin: auto;
display: flex;
justify-content: space-between;
align-items: center;
span{
  text-decoration: line-through solid 2px;
  font-size: 1rem;
  font-weight: 800;
}
`



const Product = ({product}) => {
  const [data,setData] = useContextData()
  const {cart,setCart,addtoCart,productPage} = useContextCart() 
  const {id,title,image,oldPrice,price,quantity} = product
  


  return (
    <ProductDiv>
      <Link to={`/product/${id}`} onClick={()=>productPage(id)} >
      <img src={image} alt="" />
      </Link>
       <h3>{title}</h3>
       <PriceFlex>
        <span>${oldPrice.toFixed(2)}</span>  
        <button  onClick={()=>addtoCart(product,id)}>${price.toFixed(2)}</button>
       </PriceFlex>
     </ProductDiv>
  )
}

export default Product