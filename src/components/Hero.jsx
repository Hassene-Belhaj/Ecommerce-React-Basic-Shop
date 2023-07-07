import React from 'react'
import { styled } from 'styled-components'
import { Button } from './Global'


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


const HeroDiv = styled.div`
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
h3{
    width : 80%;
    font-weight: 100;;
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
  return (
  <Container>
    <HeroDiv>
        {/* <img src='/hero.jpg' alt="" /> */}
        <h2>An e-Commerce ipsum dolor sit amet consectetur adipisicing elit</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellendus, 
            quasi soluta deleniti maxime velit neque beatae cupiditate</h3>

   
       
    
 
    </HeroDiv>
   </Container>

    )
}

export default Hero