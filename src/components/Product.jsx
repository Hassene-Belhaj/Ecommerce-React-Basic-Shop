import React from 'react'
import styled  from 'styled-components'
import { useContextCart } from '../Context/ContextCart'
import { Link } from 'react-router-dom'


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
h4{
  font-size: .8rem;
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
  const {addtoCart} = useContextCart() 
  const {id,title,image,oldPrice,price} = product
  


  return (
    <ProductDiv>
      <Link to={`/product/${id}`} >
      <img src={image} alt="" />
      </Link>
       <h3>{title}</h3>
       <PriceFlex>
   
          <h4 style={{textDecoration:'line-through',textDecorationThickness:'.1rem'}}>${oldPrice.toFixed(2)}</h4>
        
        <button  onClick={()=>addtoCart(product,id)}>
          <h4>${price.toFixed(2)}</h4>
        </button>
       </PriceFlex>
     </ProductDiv>
  )
}

export default Product