import React from 'react'
import { BsFillBagFill } from 'react-icons/bs'
import { styled } from 'styled-components'
import { ToggleOf, ToggleOn } from './Global'

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
const DarkLight = styled.div`
width : 100% ;
height : auto;
display : flex ;
justify-content: end;
align-items :center; 
padding-right : 2rem ;
margin-top:6px;
button{
    display:flex;
    justify-content: center;
    border: none;
    padding :1px;
    border-radius:3px;
    background:transparent;
    cursor:pointer;
    &:hover{
     background :rgba(237, 233, 157,0.2);
    }
}
`


/* border-bottom : 1px solid rgba(0,0,0,0.1); */


const Navbar = ({theme,toggleTheme}) => {
  return (
<Container>
    <Nav>
     <h2>React Shopping </h2>    
       <Bag>
        <BsFillBagFill size={25}   />
         <Quantity>1</Quantity>
       </Bag>
    </Nav>
    <DarkLight>
           {theme==='dark' ? <button onClick={toggleTheme}><ToggleOn size={20} color='#000' /></button> : <button onClick={toggleTheme}><ToggleOf size={20} color='#fff' /></button> }
    </DarkLight>
</Container>
  )
}

export default Navbar