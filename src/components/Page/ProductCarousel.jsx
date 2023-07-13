import React, { useState } from 'react'
import styled from 'styled-components'
import {BiChevronLeft,BiChevronRight } from 'react-icons/bi'
import { AnimatePresence, motion } from 'framer-motion'


const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
@media screen and (max-width : 768px){
    display: block;
    width: 100%;
    height: auto;
}
/* overflow: hidden; */
`


const Carousel = styled.div`
width: 80%;
height: 100%;
display: flex;
overflow: hidden;
/* border-radius: 10px; */
img{
    /* border-radius: 10px; */
    min-width: 100%;
    max-height:100%;
    object-position: center;
    object-fit: cover;
}
position: relative;
@media screen and (max-width : 768px){
width : 100%;
}
`
const AsideImages = styled.div`
width: 20%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: start;
gap: .4rem   ;
img{
    margin-left:1rem;
    border:.5px solid rgba(180,180,180,0.5) ;
    max-width: 8rem;
    height: 8rem;
    object-fit: cover;
    cursor: pointer;
}
@media screen and (max-width : 768px){
width    : 100%;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 1rem;
}
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
fill: rgba(180,180,180,1);
`
const LeftChevron = styled(BiChevronLeft)`
position:absolute;
top: 50%;
transform:translateY(-50%);
left: .2rem;
fill: rgba(180,180,180,1);
`
const ProductCarousel = ({id}) => {
    const [index,setIndex] = useState(0)

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
        <Container>
        <Carousel>
        <motion.img
        initial={{opacity : 0 , x : -500}}
        animate={{opacity : 1 , x : 0}}
        transition={{
            duration : 1,
            type : 'spring' ,
            bounce : 0.3 ,
            
        }}
        exit={{opcity : 0}}
        key={Images[index].img}
        src={Images[index].img}
        alt="" /> 
        <ChevronDiv>
        <RightChevron onClick={nextSlide}  size={60}   />
        <LeftChevron  onClick={PrevSlide} size={60} />
        </ChevronDiv>
    </Carousel>
    <AsideImages>
         {Images.map((item,i)=>{
            return (
                <img key={i} src={item.img} onClick={()=>setIndex(i)} />
            )
         })}

        </AsideImages>
        </Container>
  )
}

export default ProductCarousel

