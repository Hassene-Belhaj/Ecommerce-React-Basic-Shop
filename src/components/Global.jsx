import styled, { createGlobalStyle} from 'styled-components'
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

export const Button = styled.button`
width : ${({width})=>width} ;
height : ${({height})=>height} ;
border : 1px solid ${({theme})=>theme.color} ;
background : ${({theme})=>theme.color};
color : ${({theme})=>theme.background};
border-radius : 3px ;
text-align: center;
&:hover{
    opacity : 0.8 ;
}
`

// export const Container =styled.div`
// width : ${({width})=>width};
// height : ${({height})=>height} ;
// background:${({theme})=>theme.background};
// color:${({theme})=>theme.color};
// margin:${({margin})=>margin};
// padding:${({padding})=>padding};
// `

// export const FlexContainer = styled.div`
// display :flex;
// justify-content: ${({justify})=>justify ? 'center' : 'start'};
// flex-direction: ${({direction})=>direction};
// align-items:${({align})=>align} ;
// width : ${({width})=>width};
// height : ${({height})=>height} ;
// background:${({theme})=>theme.background};
// color:${({theme})=>theme.color};
// margin:${({margin})=>margin};
// padding:${({padding})=>padding};
// text-align : ${({text})=>text};
// `

// export const Theme = {
//     colors : {
//         primary : '#0f172a',
//         primary_light : '#131c31',
//         secondary : '#7eadfc',
//         white : 'fff',
//         black: '000',
//         para_text_color : '#dcdcdc',
//     },
//     fonts : {
//         family : 'DM Sans',
//         weight : { 
//             regular : 400 , 
//             medium : 500 ,
//             bold : 700, 
//         }
//     },
//     breakpoints : {
//         mobile : '720px',
//     }
// }