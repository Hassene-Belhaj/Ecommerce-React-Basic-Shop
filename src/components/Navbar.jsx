import React from 'react'
import { useState } from 'react'
import { BsFillBagFill } from 'react-icons/bs'
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'
import { styled } from 'styled-components'
import { Link as Linked} from 'react-router-dom'
import {motion } from 'framer-motion'

const Container = styled.div`
width : 100% ;
height : 100% ;
position : relative ;
`



const Nav = styled.nav`
position: relative;
width:100%;
height:60px;
display: flex;
align-items: center;
box-shadow: 1px 0px 0.8px ${({theme})=>theme.color};
h2{
    width: 10%;
    font-size : 1.1rem;
    margin-left: 2rem;
}
@media screen and (max-width : 768px) {
h2{
  display: none;
}  
}
`
const Links = styled.div`
position: relative;
width:60%;
height: 60px;
display: flex;
justify-content: start;
align-items:center;
margin-left: 5rem;
@media screen and (max-width : 768px){
display: none;
}

`
const Button = styled.button`
display:flex;
position: relative;
background: transparent;
border: none;
margin-left: 1rem;
padding:.5rem 1rem;
font-size: 14px;
font-weight : 700;
border-radius :5px; 
color: ${({theme})=>theme.color};
transition:all 0.3s ease-in-out;
cursor: pointer;

&:hover{
background :rgba(239, 239, 239,0.3);
transition:all 0.3s ease-in-out;  
}
`

const Bag = styled.div`
position: absolute;
top : 50% ;
right : 2rem ;
transform: translateY(-50%);
`

const Quantity = styled.span`
position:absolute;
bottom: 0;
right:0;
transform :translate(25%,25%);
width : 1rem;
height: 1rem;
background: red;
border-radius: 50%;
font-size: 0.8rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.8rem;
color : #fff ;
font-weight: 700;
`

const Contraste = styled.div`
position: fixed;
width: 100%;
height: 100%;
inset: 0;
background: rgba(0,0,0,0.8);
z-index: 998;
backdrop-filter: blur(2px);  
@media screen and (min-width : 768px){
display: none;
}
`

const AsideMenu = styled.div`
position : fixed ;
top : 0;
bottom :0;
width: 40%;
height: 100%;
transition: all 0.3s ease-in-out;
z-index: 1000;
background: ${({theme})=>theme.background};
color :${({theme})=>theme.color} ;
box-shadow :0px 0px 2px ${({theme})=>theme.color} ;
@media screen and (min-width : 768px){
display: none;
}
@media screen and (max-width : 768px){
width: 100%;
}
`
const IconMenu = styled.span`
display: none;
@media screen and (max-width : 768px){
display:block; 
position  :absolute ;
top: 50%;
left : 1rem;
transform: translateY(-40%);
transition: all 0.3s ease-in-out;
z-index: 999;
}
`
const Heading = styled.div`
width : auto;
display: flex;
justify-content: space-between;
align-items: baseline;
margin: 1rem;
h2{
  font-size: 16px;
}
`

const FlexContainerSm = styled.div`
width : 100% ;
height : 70% ;
display: flex;
flex-direction : column ;
justify-content: center;
align-items: center;

`


const LinkItem = styled.span`
width : auto;
height: auto;
margin: 2rem 1rem;
cursor:pointer;
`
const Link = styled(Linked)`
text-decoration: none;
border-bottom: ${({border})=>border ? 'solid 1px #000' : 'none'} ;
color : ${({theme})=>theme.color} ;
font-size: ${({size})=>size};
padding: .5rem;
&:hover{
  opacity : 0.8;
transition: all 0.3s ease;
}
`

const Navbar = ({Navigation}) => {
  const [toggle,setToggle] = useState(false)
  const [chevron,setChevron] = useState(false)
  const handleClick = () => setToggle(!toggle)
  const handleChevron = () =>setChevron(!chevron)


  return (
<Container>
    <Nav>
     <h2>React Shopping </h2> 
     <Links>
       {Navigation.map((item,index)=>{
        return (
           <Button key={index}  onClick={handleChevron} onMouseEnter={()=>setChevron(true)}>
            <Link size={'0.9rem'}>{item.title}</Link>
          </Button>
            )
        })}
        
        </Links>

       <Bag>
        <BsFillBagFill size={25}/>
         <Quantity>1</Quantity>
       </Bag>
    </Nav>
    
  
    <AsideMenu style={{left: toggle ? 0 : '-100%' }} >
       <Heading>
        <h2>React Shopping </h2> 
            <AiOutlineClose style={{cursor:'pointer'}} color={`${({theme})=>theme.color}`} size={'15'} onClick={handleClick} />
       </Heading>

        <FlexContainerSm>
           {Navigation.map((item,index)=>{
             return ( 
           
                        <LinkItem  key={index}>
                            <Link style={{borderBottom:'1px solid #000'}} size={'1.5rem'}>{item.title}</Link> 
                        </LinkItem>
              
             )
           })}
        
        </FlexContainerSm>
                
      </AsideMenu>

 
    {toggle ?  
      <Contraste></Contraste>
    : 
    <IconMenu>
          <AiOutlineMenu size={'20'} color={`${({theme})=>theme.color}`} onClick={handleClick}/>
    </IconMenu> }
            
         
      
    

  
 
  
   
</Container>
  )
}

export default Navbar