import React from 'react'
import { styled } from 'styled-components'


const Container = styled.div`
width: 100%;
height: 400px;
background: ${({theme})=>theme.background};
color: ${({theme})=>theme.color};
`

const Grid = styled.div`
padding-top:2rem ;
width: 90%;
display: grid;
grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
margin: auto;
`

const Footer = () => {
  return (
    <Container>
      <Grid>
       <span><h3>React Shopping</h3></span>
     
      </Grid>
    </Container>
  )
}

export default Footer