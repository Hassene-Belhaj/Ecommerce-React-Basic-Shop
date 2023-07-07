import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { styled } from 'styled-components'
import { HiChevronUp,HiChevronDown } from 'react-icons/hi'
import { useContextCart } from '../Context/ContextCart'



const LeftColumn = styled.div`
width: 30%;
height: 100%;
display: flex;
img{
    max-width: 100%;
}
`

const Headline = styled.div`
width: 60%;
height: 2rem;
display: flex;
justify-content: space-between;
`
const MiddleDiv = styled.div`
width: 60%;
height: auto;
background: red;
display: flex;
`
const ChevronBtn = styled.div`
width: 2rem;
height: auto;
display: flex;
flex-direction: column;
`
const Price = styled.div`
width: 60%;
height: auto;
display: flex;
justify-content: space-between;
margin: auto;
`
const ProductCart = ({product}) => {
   const {deleteProduct} = useContextCart()
 const {id,title,image,price,quantity} =  product
  return (

   <>
         <LeftColumn>
            <img src={image} alt="" />
        </LeftColumn>   
        <Headline>
                <h3>{title}</h3>
                <span><AiOutlineClose onClick={()=>deleteProduct(id)} /></span>
        </Headline>
         <MiddleDiv>
              <button style={{padding:'.5rem'}}>{quantity}</button>
              <ChevronBtn>
                <button> <HiChevronUp /> </button>
                <button> <HiChevronDown /> </button>
             
              </ChevronBtn>   
              <Price>
                  <h3>{price}</h3>
                  <h3>{price}</h3>
                </Price>
         </MiddleDiv>
   </>
   

  )
}

export default ProductCart