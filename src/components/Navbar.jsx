import React from 'react'
import { useState } from 'react'
import { BsFillBagFill } from 'react-icons/bs'
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'
import { NavLink,Link} from 'react-router-dom'
import { useContextCart } from '../Context/ContextCart'
import { useContextAuth } from '../Context/ContextAuth'
import styled from 'styled-components'
import { useContextData } from '../Context/ContextData'
import { useEffect } from 'react'
import SearchBarNav from './SearchBarNav'

const Container = styled.div`
width : 100% ;
height : 60px ;
position : fixed ;
background:${({color})=>color ? 'rgba(180,180,180,0.8)' : null} ;
transition : all .3s ease-in-out ;
z-index: 1000;
`



const Nav = styled.nav`
position: relative;
width:98%;
margin: 0 auto;
height:60px;
display: flex;
justify-content: start;
align-items: center;
h2{
  width: 10%;
  font-size : 1rem;
}
@media screen and (max-width : 768px) {
  width: 95%;
}
`
const Linklogo= styled(Link)`
width: auto;
text-decoration: none;
color : ${({theme})=>theme.color} ;
font-weight: 700;
@media screen and (max-width : 768px) {
  display: none;
}

`

const BorderNav = styled.span`
display: block;
width: 100%;
border-top: .1px solid rgba(180,180,180,0.5);
`


const LinksDiv = styled.div`
position: relative;
width:auto;
height: 60px;
display: flex;
justify-content: start;
align-items:center;
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
padding:.3rem .6rem;
font-size: 14px;
font-weight : 700;
border-radius :5px; 
color: ${({theme})=>theme.color};
transition:all 0.3s ease-in-out;
cursor: pointer;

&:hover{
background :rgba(108, 122, 137,0.2);
transition:all 0.3s ease-in-out;  
}
`

const Bag = styled.div`
position: absolute;
top : 50% ;
right : 80px ;
transform: translateY(-50%);
cursor: pointer;
`

const SignBtn = styled.div`
position: absolute;
display: flex;
top: 50% ;
right : 0 ;
transform : translateY(-50%) ;
button{
  cursor: pointer;
  width: 4rem;
  height: 1.9rem;
  border: none;
  border-radius: 8px;
  background: ${({theme})=>theme.color};
  color :${({theme})=>theme.background}; 
  font-weight: 700;
  transition: all .3s ease-in-out;
  font-size: .7rem;
  &:hover{
    transition: all .3s ease-in-out;
    opacity : 0.9 ;
  }
}
`


const Quantity = styled.span`
position:absolute;
bottom: 0;
right:0;
transform :translate(25%,25%);
width : 1.2rem;
height: 1.2rem;
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
left : ${({$toggle})=>$toggle ? 0 :'-100%'};
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
  left : 2rem;
  transform: translateY(-40%);
  transition: all 0.3s ease-in-out;
  z-index: 999;
  cursor: pointer;
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

const LinkStyle= styled(NavLink)`
text-decoration: none;
color : ${({theme})=>theme.color} ;
font-size: ${({size})=>size};
padding: .5rem;
transition: all 0.3s ease;
&:hover{
  opacity : 0.8;
  transition: all 0.3s ease;
}
// navlink style now is activated 
&.active{
  /* text-decoration: underline;
  text-underline-offset: .5rem; */
  border-bottom :solid 1px ${({theme})=>theme.color};
}
`
const BtnSignin = styled.button`
`

const Img = styled.img`
width: 2rem;
height: 2rem;
border-radius: 50%;
`

const Navbar = ({Navigation}) => {
  const [data] = useContextData()
  const {isopen,setIsOpen,handleClickCart,bag} = useContextCart()
  const {user , succes , logOut} =  useContextAuth()
  const [toggle,setToggle] = useState(false)
  const [color,setColor] = useState(false)

  const handleClick = () => setToggle(!toggle)


const ColorNav = () => {
window.addEventListener('scroll' , ()=> {
window.scrollY > 60 ? setColor(true) : setColor(false)  
})  
}
  
useEffect(()=>{
ColorNav()
},[])



  return (
<Container id='Top' color={color ? 1 : 0}>
  <Nav>
        <Linklogo to={'/'}  style={{textDecoration:'none',marginRight:'2rem'}}>            
            React Shopping
        </Linklogo>

          <LinksDiv>
            {Navigation.map((item,index)=>{
              return (
                <Button key={index}  >
                <LinkStyle to={item.url} size={'0.9rem'}>{item.title}</LinkStyle>  
              </Button>
                )
              })}
            </LinksDiv>
            

      
       <Bag onClick={handleClickCart} >
          <BsFillBagFill size={25} />
          <Quantity>{bag}</Quantity>
       </Bag>

   
             <SearchBarNav />
      
        <SignBtn>
             <Link to={'/signin'}>
                {user?.displayName ? 
                <>
                 {/* <Img src={user?.photoURL} alt="" /> */}
                <BtnSignin onClick={logOut}>sign out</BtnSignin> 
                </>
                : 
                <BtnSignin >Sign in</BtnSignin> }        
            </Link>
       </SignBtn>
    </Nav>
    {/* <BorderNav></BorderNav> */}
  



    <AsideMenu $toggle={toggle} >
       <Heading>
        <h2>React Shopping </h2> 
            <AiOutlineClose style={{cursor:'pointer'}}  size={'15'} onClick={handleClick} />
       </Heading>

        <FlexContainerSm>
           {Navigation.map((item,index)=>{
             return (
                       <LinkItem  key={index} >           
                            <LinkStyle to={item.url}  onClick={()=>setToggle(false)} size={'1.5rem'}>{item.title}</LinkStyle> 
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