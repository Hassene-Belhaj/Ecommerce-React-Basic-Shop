import React, { useState } from 'react'
import { styled } from 'styled-components'
import { useContextAuth } from '../Context/ContextAuth'
import { BsGoogle } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { RiDiscordFill } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'

const Container = styled.div`
display: ${({$signin})=>$signin ? 'block': 'none' };
position: fixed;
inset: 0;
background:#000;
color:#fff;
width: 100%;
height: 100vh;
z-index: 50000;
`
const Logo = styled.span`
position: absolute;
width: auto;
height : auto ;
z-index: 8000;
h2{
    font-size : 1.1rem;
    margin-left: 2rem;
    margin-top:1rem;
}
`
const Close = styled.span`
position: absolute;
width: auto;
height : auto ;
top: 1rem;
right: 2rem;
z-index: 8000;

`

const FlexContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
@media screen and (max-width : 768px) {
justify-content: center;
}
`
const RightCol = styled.div`
width: 50%;
height: 100%;
display: flex;
overflow: hidden;
img{
    min-width: 100%;
    object-fit: cover;
}
display: relative;
@media screen and (max-width : 768px) {
width    :100% ;
}
` 
const Contraste = styled.div`
position: absolute;
inset: 0;
background : rgba(0,0,0,0.5); 
width: 50%;
@media screen and (max-width : 768px) {
width    :100% ;
background : rgba(0,0,0,0.85); 
}
`
const LeftCol = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (max-width : 768px) {
width    :60% ;
position: absolute;
}
`
const Form = styled.form`
width: 500px;
height: auto;
border: solid 1px #fff;
border-radius: 15px;
padding: 1rem;
h3{
    font-size: 1.5rem;
}
p{
    color: lightgray;
    margin: 1rem auto;
}
input{
    width: 100%;
    height: 3rem;
    margin: 1rem auto;
    border-radius:8px ;
    border: 1px solid #fff;
    font-size: 1.1rem;
    background: #000;
    color: #fff;
:focus{
    border: none;
}   
&::placeholder{
color : #fff;
padding-left:1rem ;
}
}
@media screen and (max-width : 1054px) {
width: 360px;
}
@media screen and (max-width : 768px) {
width: 360px;
}
`
const Btn = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
gap: .6rem;
button{
    width: 100rem;
    height: 2.5rem;
    border-radius: 7px;
    border: solid 1px gray ;
    background: transparent;
    color: #fff;
    font-size: 1.1rem;
    transition: all .2s ease-in-out;
    cursor: pointer;
&:hover{
    transition: all .2s ease-in-out;
    background:rgba(255,255,255,0.2);
}    

}
`
const Span = styled.span`
width: 100%;
height: auto;
padding: 1rem;
display: flex;
justify-content: center;
position: relative;
`
const BorderLeft = styled.span`
position: absolute;
width: 30%;
border: 1px solid #fff;
top: 50%;
left: 0;
`
const BorderRight = styled.span`
position: absolute;
width: 30%;
border: 1px solid #fff;
top: 50%;
right: 0;
`
const Button = styled.button`
margin-top:1rem;
width: 100% ;
height: 3rem;
border-radius: 8px ;
border:none;
font-size: 1rem;
font-weight: 700;
transition: all 0.3s ease-in-out;
cursor: pointer;
&:hover{
    transition: all 0.3s ease-in-out;
    opacity:0.9 ;
}
`

const Signin = () => {
  const {signin,handleSign} =   useContextAuth()
  console.log(signin);

  return (
        <Container $signin={signin}> 
          <Logo>
            <h2>React Shopping</h2>
          </Logo>
          <Close>
            <AiOutlineClose onClick={handleSign} size={20}/>
          </Close>
          <FlexContainer>
              <RightCol>
                <Contraste></Contraste>
                <img src='hero.jpg' alt="" />
              </RightCol>
              <LeftCol>
                  <Form onClick={e=>e.preventDefault()}>
                    <h3>Sign in</h3>
                    <p>Choose your preferred sign in method</p>
                    <Btn>
                    <button>
                      <BsGoogle style={{marginRight:'.5rem'}} size={13}/>
                       Google
                    </button>
                     <button>
                        <FaFacebookF style={{marginRight:'.5rem'}} size={13}  />
                        Facebook
                    </button>
                     <button>
                     <RiDiscordFill style={{marginRight:'.5rem'}} size={13} color='#fff'/>   
                     Discord 
                    </button>    
                    </Btn> 
                     <Span> 
                        <h4>Or Continue with </h4>
                        <BorderLeft></BorderLeft>
                        <BorderRight></BorderRight>
                        </Span>
                   
                  <h4>Email</h4>
                   <input type="email" placeholder='reactshopping@react.com' />
                   <h4>Password</h4>
                   <input type="password" placeholder='*********' />
                    <Button>Sign in</Button> 
                    <Span>Dont have an account yet ? </Span>
                    <Span style={{borderBottom:'1px solid'}}>Sign Up</Span>
                  </Form>
              </LeftCol>
          </FlexContainer>

        </Container>
  )
}

export default Signin