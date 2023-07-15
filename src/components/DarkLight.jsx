import React from 'react'
import { ToggleOf, ToggleOn } from './Global'
import styled from 'styled-components'


const DarkLightDiv = styled.div`
width : 100% ;
height : auto;
display : flex ;
justify-content: start;
align-items :center; 
padding-left : 2rem ;
margin-top:10px;
margin-bottom: 10px;
button{
    display:flex;
    justify-content: center;
    border: none;
    padding :4px;
    border-radius:3px;
    background :rgba(108, 122, 137,0.2);
    cursor:crosshair;
    &:hover{
    /* background :rgba(108, 122, 137,0.2); */
    }
}
` 
const DarkLight = ({theme,toggleTheme}) => {
  return (
    <DarkLightDiv>
    {theme==='dark' ? 
    <button onClick={toggleTheme}>
       <ToggleOn size={20} color='#030712' />
     </button> 
    : 
    <button onClick={toggleTheme}> 
     <ToggleOf size={20} color='#fff' /> </button> }
</DarkLightDiv>
  )
}

export default DarkLight