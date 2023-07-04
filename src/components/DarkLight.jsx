import React from 'react'
import { styled } from 'styled-components'
import { ToggleOf, ToggleOn } from './Global'


const DarkLightDiv = styled.div`
width : 100% ;
height : auto;
display : flex ;
justify-content: end;
align-items :center; 
padding-right : 2rem ;
margin-top:6px;
margin-bottom: 6px;
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
const DarkLight = ({theme,toggleTheme}) => {
  return (
    <DarkLightDiv>
    {theme==='dark' ? 
    <button onClick={toggleTheme}>
       <ToggleOn size={20} color='#000' />
     </button> 
    : 
    <button onClick={toggleTheme}> 
     <ToggleOf size={20} color='#fff' /> </button> }
</DarkLightDiv>
  )
}

export default DarkLight