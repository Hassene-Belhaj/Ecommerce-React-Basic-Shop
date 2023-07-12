import React, { useState } from 'react'
import styled from 'styled-components'


const Carousel = styled.div`
width: 100%;
height: 100%;
display: flex;
img{
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    min-width: 100%;
    min-height:100%;
    object-fit: cover;
}
`


const ProductCarousel = ({id}) => {
   console.log(id);
   const [index,setIndex] = useState(null)

    
    const Images = [
    {image : `product${id}/product${id} (1).jpg`},
    {image : `product${id}/product${id} (2).jpg`},
    {image : `product${id}/product${id} (3).jpg`},
    {image : `product${id}/product${id} (4).jpg`}
    ]



    return (
    <Carousel>
        <img src={`/product${id}/product${id} (1).jpg`} alt="" /> 
    </Carousel>
  )
}

export default ProductCarousel

