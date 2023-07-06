import React from 'react'
import { useState } from 'react'
import { BsFillBagFill } from 'react-icons/bs'
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'
import { BiSolidChevronDown, BiSolidChevronUp } from 'react-icons/bi'
import { styled } from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

const Container = styled.div`
width : 100% ;
height : 100% ;
position : relative ;
`



const Nav = styled.nav`
position: relative;
width:100%;
height:60px;
/* background: #f3f5f9; */
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
padding-right :1.2rem;
padding-top : .3rem ;
padding-bottom : .3rem ;
padding-left: .3rem;
font-size: 14px;
font-weight : 700;
border-radius :5px; 
color: ${({theme})=>theme.color};
transition:all 0.3s ease-in-out;
cursor: pointer;
span{
  position: absolute;
  right:2px;
  top:8px;
 transition:all 0.2s ease;  
}
:last-child{
transition:all 0.6s ease-in-out;  
}
&:hover{
background :rgba(239, 239, 239,0.4);
transition:all 0.3s ease-in-out;  
span{
  transform : rotate(180deg);
  transition:all 0.2s ease;  
}
:last-child{
display: block;
transition:all 0.6s ease-in-out;  
}

}
`
const ChevronDown = styled(BiSolidChevronDown)`
cursor: pointer;
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
left: ${({show})=>show ? 0 : "-100%"};
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
const SubMenu = styled.div`
display :none;
position: absolute;
top:30px;
left:4px;
width: 500px;
height: 200px;
transition: all 2s ease-in-out;
background: ${({theme})=>theme.background};
color : ${({theme})=>theme.color};
box-shadow :0px 0px 2px ${({theme})=>theme.color} ;
border-radius:10px;
`

const Navbar = ({Navigation}) => {
  const [show,setShow] = useState(false)
  const [chevron,setChevron] = useState(false)
  const handleClick = () => setShow(!show)
  const handleChevron = () =>setChevron(!chevron)


  return (
<Container>
    <Nav>
     <h2>React Shopping </h2> 
     <Links>
       {Navigation.map((item,index)=>{
        return (
          <>
           <Button key={index} onClick={handleChevron} onMouseEnter={()=>setChevron(true)}>
            {item.title}
            <span> 
                <ChevronDown />
            </span>
       
            <AnimatePresence>
         {chevron ?  

         <SubMenu
          //  variants={{
          //    hidden : { opacity : 0 , x : 200} ,
          //    visible : {opacity : 1 , x :0},
          //   }}
          //   initial='hidden'
          //   animate='visible'
          //   transition={{
          //     duration : 1 ,
          //     delay : 0.2 ,
          //     type : 'spring',
          //     bounce : 0.3 ,
          //   }}
            
            
            > 
            <motion.div
          
          
          >
              <h4>{item.id}</h4>
            </motion.div>
           </SubMenu>
           : ''}     
           </AnimatePresence>  
          </Button>
          </>
          )
        })}
        
        </Links>

       <Bag>
        <BsFillBagFill size={25}/>
         <Quantity>1</Quantity>
       </Bag>
    </Nav>
    
  
    <AsideMenu show={show}>
       <Heading>
        <h2>React Shopping </h2> 
            <AiOutlineClose color={`${({theme})=>theme.color}`} size={'15'} onClick={handleClick} />
       </Heading>
    
      </AsideMenu>

 
    {show ?  
      <Contraste></Contraste>
    : 
    <IconMenu>
          <AiOutlineMenu size={'20'} color={`${({theme})=>theme.color}`} onClick={handleClick}/>
    </IconMenu> }
            
         
      
    

  
 
  
   
</Container>
  )
}

export default Navbar