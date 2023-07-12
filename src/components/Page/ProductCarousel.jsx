import React, { useState } from 'react'
import styled from 'styled-components'
import {BiChevronLeft,BiChevronRight } from 'react-icons/bi'
import { motion } from 'framer-motion'

const Carousel = styled.div`
width: 100%;
height: 100%;
display: flex;
overflow: hidden;
border-radius: 10px;


img{
    /* border-top-left-radius: 10px; */
    border-radius: 10px;
    min-width: 100%;
    min-height:100%;
    object-fit: cover;
}
position: relative;
`

const ChevronDiv = styled.div`
position: absolute;
inset: 0;
`
const RightChevron = styled(BiChevronRight)`
position:absolute;
top: 50%;
transform:translateY(-50%);
right: .2rem;
fill: rgba(180,180,180,0.8);
`
const LeftChevron = styled(BiChevronLeft)`
position:absolute;
top: 50%;
transform:translateY(-50%);
left: .2rem;
fill: rgba(180,180,180,0.8);
`
const ProductCarousel = ({id}) => {
    const [index,setIndex] = useState(0)
   console.log(id);

    const Images = [
    {img : `/product${id}/product${id} (1).jpg`},
    {img : `/product${id}/product${id} (2).jpg`},
    {img : `/product${id}/product${id} (3).jpg`},
    {img : `/product${id}/product${id} (4).jpg`}
    ]


const nextSlide = () => {
const curr = index === Images.length - 1 
setIndex(curr ? 0 : index + 1)
}

const PrevSlide = () => {
const curr = index === 0
setIndex(curr ? Images.length - 1 : index - 1)

}



    return (
    <Carousel>
          
        <motion.img 
        initial={{opacity : 0 , x : 500}}
        animate={{opacity : 1 , x : 0}}
        transition={{
            duration : 0.5 ,
            type : 'spring' ,
            bounce : 0.3
        }}
        key={Images[index].img}
        src={Images[index].img}
        alt="" /> 
        <ChevronDiv>
        <RightChevron onClick={nextSlide}  size={60}   />
        <LeftChevron  onClick={PrevSlide} size={60} />
        </ChevronDiv>
    </Carousel>
  )
}

export default ProductCarousel

