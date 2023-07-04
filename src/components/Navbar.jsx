import React from 'react'
import { BsFillBagFill } from 'react-icons/bs'
import { styled } from 'styled-components'

const Container = styled.div`
width : 100% ;
height : 100% ;
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
    font-size : 1.1rem;
    margin-left: 2rem;
}
`
const Bag = styled.span`
position: absolute;
top : 50% ;
right : 2rem ;
transform: translateY(-50%);
`

const Quantity = styled.span`
position:absolute;
bottom: 0;
right:0;
transform :translate(25%,25%) ;
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



/* border-bottom : 1px solid rgba(0,0,0,0.1); */


const Navbar = () => {
  return (
<Container>
    <Nav>
     <h2>React Shopping </h2>    
       <Bag>
        <BsFillBagFill size={25}   />
         <Quantity>1</Quantity>
       </Bag>
    </Nav>
   
</Container>
  )
}

export default Navbar