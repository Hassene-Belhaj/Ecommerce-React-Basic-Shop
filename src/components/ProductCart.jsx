import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import  styled  from 'styled-components'
import { HiChevronUp,HiChevronDown } from 'react-icons/hi'
import { useContextCart } from '../Context/ContextCart'


const ProductCartDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
border: 1px solid rgba(180,180,180,0.3);
`


const LeftColumn = styled.div`
width: 30%;
height: 100%;
display: flex;
img{
    min-width: 100%;
    max-height: 100%;
    object-fit:cover ;
}
`
const RightColum = styled.div`
width: 70%;
height: 100%;
`
const Headline = styled.div`
width: 90%;
height: 2rem;
display: flex;
justify-content: space-between;
margin:1rem auto;
`
const MiddleDiv = styled.div`
width: 90%;
height: 2rem;
display: flex;
button{
    width: 2rem;
    font-weight: 800;
    margin-left: 1rem;
    border-radius: 3px; 
    border: none;
    background: none;
    color: ${({theme})=>theme.color};
 &:hover{
background :rgba(108, 122, 137,0.2);
transition:all 0.3s ease-in-out;  
}
}
`
const ChevronBtn = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
button{
cursor: pointer;
}
`
const Price = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin: auto .5rem;
`
const ProductCart = ({product}) => {
   const {deleteProduct,decreaseQuantity,increaseQuantity,cart} = useContextCart()
   const {id,title,image,price,quantity} =  product
   const [ img, setImg ] = useState({});
 

  const priceQuantity = quantity * price
 
useEffect(()=>{
setImg({src : image})
},[])


if (!product?.image) return ( <h4 className='text-center text-5xl font-semibold mt-4'>loading image...</h4> )

  return (
    <ProductCartDiv>
     <LeftColumn>
        <img src={img} alt={image} />
     </LeftColumn>

     <RightColum>
         <Headline>
            <h4>{title}</h4>
            <span><AiOutlineClose style={{cursor:'pointer'}} onClick={()=>deleteProduct(id)}/></span>
         </Headline>
         <MiddleDiv>
                        <button style={{border:'none'}}>{quantity}</button>
                <ChevronBtn>
                    <button><HiChevronUp onClick={()=>increaseQuantity(id,product)} size={15} /> </button>
                    <button><HiChevronDown onClick={()=>decreaseQuantity(id)} size={15} /> </button>
                </ChevronBtn>
                    <Price>
                    <span><h4>${price}</h4></span>   
                    <span><h4>${priceQuantity}</h4></span>   
                    </Price>
         </MiddleDiv>
     </RightColum>

   </ProductCartDiv>
 
   

  )
}

export default ProductCart