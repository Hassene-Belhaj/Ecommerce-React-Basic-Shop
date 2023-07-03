import {createGlobalStyle, styled } from 'styled-components'
import { BsFillMoonFill,BsFillSunFill } from 'react-icons/bs'


 export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
}

html{
    scroll-behavior: smooth;
    background: ${({theme})=>theme.background};
    color: ${({theme})=>theme.color};
    transition: all 0.3s ease-in-out;

}

`





export const ToggleOn = styled(BsFillMoonFill)`
`


export const ToggleOf =styled(BsFillSunFill)`
`