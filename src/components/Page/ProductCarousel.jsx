import React, { useEffect, useState } from 'react'
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
border-top-right-radius: 10px;
border-top-left-radius: 10px;
/* border-radius: 10px; */
img{
    min-width: 100%;
    min-height: 100%;
    object-fit:cover;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
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
margin-left: 2rem;
gap: 2rem;
@media screen and (max-width : 768px){
    width    : 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    gap: .4rem;
    margin-left: 0;
}
`


const ImgFlex = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
img{
    border-bottom:${({active})=>active? '3px solid':'none'}; 
    padding-bottom:.6rem;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    max-width: 100%;
    max-height: 10rem;
    object-fit: cover;
    cursor: pointer;
}
@media screen and (max-width : 768px){
    padding-bottom: .5rem;
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
    const [active,setActive] = useState(false)
    console.log(active);

    const Images = [
    {id : 0 ,img : `/product${id}/product${id} (1).jpg`},
    {id : 1 ,img : `/product${id}/product${id} (2).jpg`},
    {id : 2 ,img : `/product${id}/product${id} (3).jpg`},
    {id : 3 ,img : `/product${id}/product${id} (4).jpg`},
    ]




const nextSlide = () => {
const curr = index === Images.length - 1 
setIndex(curr ? 0 : index + 1)
}

const PrevSlide = () => {
const curr = index === 0
setIndex(curr ? Images.length - 1 : index - 1)
}


const handleClick = (i) => {
    setIndex(i)  
if(index === id) {
    setActive(true)
} else{
    setActive(false)
}   
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
        alt="" 
        /> 
        <ChevronDiv>
        <RightChevron onClick={nextSlide}  size={60}   />
        <LeftChevron  onClick={PrevSlide} size={60} />
        </ChevronDiv>
    </Carousel>
    <AsideImages  >
         {Images.map((item,i)=>{
            return (
                     <ImgFlex key={i} active={index === i ? 1 : 0} onClick={()=>handleClick(i)}>
                            <img  src={item.img}  />
                     </ImgFlex>
           
                   
  
    
           
                
            )
         })}
        </AsideImages>
        </Container>
  )
}

export default ProductCarousel

