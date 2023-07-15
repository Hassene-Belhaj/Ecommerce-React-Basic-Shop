import React from 'react'
import { Button } from './Global'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import {motion , useAnimation} from 'framer-motion'
import { useEffect } from 'react'

const Container = styled.div`
width: 100%;
height:40rem;
background:${({theme})=>theme.background};
transition: all 0.3s ease-in-out;
margin: auto;
@media screen and (max-width : 768px) {
margin-bottom:1rem;
}
`


const HeroDiv = styled(motion.div)`
width : 50% ;
height : 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: auto;
text-align: center;
img{
    min-width: 100%;
}
h2{
    font-size: 4rem;
    margin-bottom: 2rem;
    font-weight: 900;
}
p{
    font-size: 1.2rem;
}
@media screen and (max-width : 768px) {
padding-top:4rem ;
display:block;
width : 80%; 
height:100%;  
h2{
font-size: 2.5rem;
font-weight: 900;
}    
h3{
font-size    :1.5rem ;
margin: auto;
} 
}

`

const Hero = () => {

const {ref,inView} = useInView()
const animation = useAnimation()


useEffect(()=>{
if(inView){
    animation.start('visible')
} else {
    animation.start('hidden')
}
},[inView])


  return (
  <Container ref={ref}>
    <HeroDiv 
      variants={{
        hidden : {opacity : 0.8 , x : -50} ,
        visible : {opacity : 1 , x : 0 }   
       }}
       initial='hidden'
       animate={animation}
       transition={{
            delay : 0.2 ,
           duration : 1.5 ,
           type : 'spring' ,
           bouce : 0.2
   
       }}
    
    
    >
        {/* <img src='/hero.jpg' alt="" /> */}
        <h2>An e-Commerce ipsum dolor sit amet consectetur adipisicing elit</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellendus, 
            quasi soluta deleniti maxime velit neque beatae cupiditate</p>


    </HeroDiv>
   </Container>

    )
}

export default Hero